import fs from 'fs'
import path from 'path'

export default function writeFile (route: string, text = '') {
  if (!route || !text) return
  console.log(`Document written to ${route}`)
  try {
    fs.writeFileSync(route, text, {})
  } catch (error) {
    const routePath = path.parse(route)
    fs.mkdirSync(routePath.dir, { recursive: true })
    fs.writeFileSync(route, text, {})
  }
}
