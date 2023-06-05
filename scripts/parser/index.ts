import fs from 'fs'
import path from 'path'
import ts from 'typescript'

import { DocEntry, generateDocumentation } from './ast'
import envMap from './taro-env'

export default function compile (p: string, n: string, dep: string[], callback?: (routePath: string, doc: DocEntry[]) => void) {
  const route = path.resolve(p, n)
  try {
    const stat = fs.statSync(route)
    if (stat.isDirectory()) {
      fs.readdirSync(route, {
        encoding: 'utf8'
      }).forEach(filename => ![
        'node_modules', 'bin', 'templates', 'dist', '__tests__', '__mocks__', '_book', '.vscode', '.idea', '.DS_Store',
      ].includes(filename) && compile(route, filename, dep, callback))
    } else {
      const docTree = generateDocumentation([route, ...dep], {
        target: ts.ScriptTarget.ES5,
        module: ts.ModuleKind.ESNext,
        noResolve: true
      })
      callback && callback(route, docTree)
    }
  } catch (error) {
    console.error(error)
  }
}

export { DocEntry, envMap, generateDocumentation }
