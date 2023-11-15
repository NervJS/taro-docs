import path from 'path'

import { DocEntry } from '../parser'
import { childrenMerge, isFunction, isNotAPI, isShowAPI, splicing } from '../parser/utils'
import writeFile from '../write'
import { get, isntTaroMethod, TaroMethod } from '.'

export async function writeApiDoc (routePath: string, doc: DocEntry[], withGeneral = false) {
  const _p = path.parse(routePath)
  const merge = await childrenMerge(doc, [])
  const TaroExports = merge?.[0]?.exports || []
  const TaroStatic = TaroExports.find(e => e.name === 'TaroStatic')
  const Taro = await childrenMerge(TaroStatic?.members, TaroExports)

  if (Taro) {
    for (const e of Taro) {
      const name = e.name || 'undefined'
      const tags = e.jsTags || []
      const declarations = e.declarations || []
      const params = await childrenMerge(declarations?.[0]?.parameters, e.parameters)
      const members = await childrenMerge(declarations?.[0]?.members, e.members)
      const md: (string | undefined)[] = []
  
      if (['TaroGeneral', 'TaroStatic'].includes(name) && !withGeneral) continue
      if (tags.find(tag => tag.name === 'ignore')) continue
  
      if (!isFunction(e.flags) && !TaroMethod.includes(e.flags || -1) && !isntTaroMethod.includes(e.flags || -1)) {
        console.warn(`WARN: Symbol flags ${e.flags} is missing parse! Watch symbol name:${name}.`)
      }
  
      const apis = { [`${TaroMethod.includes(e.flags || -1) ? 'Taro.' : ''}${name}`]: tags }
      let showApiList = false
  
      for (const member of members) {
        if (isShowAPI(member.flags)) {
          if (member.name && member.jsTags) {
            apis[`${name}.${member.name}`] = member.jsTags || []
            if (!showApiList) showApiList = true
          }
        } else if (!isNotAPI(member.flags)) {
          console.warn(`WARN: Symbol flags ${member.flags} for members is missing parse! Watch member name:${member.name}.`)
        }
      }
  
      md.push(
        get.header({ title: get.title(name, params, e.flags), sidebar_label: name }),
        get.since(tags.find(tag => tag.name === 'since')),
        get.document(e.documentation),
        get.apiPic(tags),
        get.see(tags.find(tag => tag.name === 'see')),
        get.type(e.type, 2),
        get.members(members, undefined, 2, TaroMethod.includes(e.flags || -1) ? 'Taro' : name),
        get.members(await childrenMerge(e.exports, params), '参数', 2, TaroMethod.includes(e.flags || -1) ? 'Taro' : name),
        get.example(tags),
        showApiList ? get.api(apis) : undefined,
      )
  
      writeFile(
        path.resolve(_p.name === 'index' ? _p.dir : routePath, `${name}.md`),
        splicing(md),
      )
    }
  }
}
