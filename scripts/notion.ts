import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import 'dotenv/config'

import writeFile from './write'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = '1f9665bd-5f7b-4908-a752-8ec5861e7789'

export async function fetchTechnicalCommittee(list: QueryDatabaseResponse['results'] = [], start_cursor?: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    start_cursor
  })
  list = list.concat(response.results || [])
  if (response.has_more && response.next_cursor) {
    return fetchTechnicalCommittee(list, response.next_cursor)
  }
  return list
}

export async function updateTechnicalCommittee() {
  const list = await fetchTechnicalCommittee()
  writeFile(`static/data/contributors.json`, JSON.stringify(list, undefined, 2))
}

updateTechnicalCommittee()
