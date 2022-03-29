import { Client } from "@notionhq/client"
import { QueryDatabaseResult } from "notion"

export const notion = new Client({ auth: process.env.NOTION_API_KEY })
export const databaseId = "1f9665bd-5f7b-4908-a752-8ec5861e7789"

export function getProperty(properties: QueryDatabaseResult['properties'] = {}, name: string) {
  const property = properties[name]
  if (name === 'title' && property instanceof Array) return property
  return property?.[property?.type]
}

export function getPropertyTitle(properties: QueryDatabaseResult['properties'] = {}) {
  const property = properties['title']
  if (property.type === 'title') {
    const title = property[property.type]?.[0] || {}
    return title[title['type'] || '']
  }
  return property[property.type]?.[0]
}
