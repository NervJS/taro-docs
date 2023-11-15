import { Client } from '@notionhq/client'
import { QueryDatabaseResult } from 'notion'

export const notion = new Client({ auth: process.env.NOTION_API_KEY })
export const databaseId = '1f9665bd-5f7b-4908-a752-8ec5861e7789'

export function getProperty (properties: Partial<QueryDatabaseResult['properties']> = {}, name: string) {
  const property = properties[name]
  if (name === 'title' && property instanceof Array) return property
  return property?.[property?.type]
}

export function getPropertyTitle (properties: Partial<QueryDatabaseResult['properties']> = {}) {
  const property = properties.title
  if (property) {
    if (property.type === 'title') {
      const val = property[property.type]
      const title = typeof val === 'string' ? { string: val, type: 'string' } : val?.[0] || {}
      return title[title.type || '']
    }
    return property[property.type]?.[0]
  } else {
    console.warn('Notion: cannot get property title', property)
  }
}

export const sleep = (ms = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
