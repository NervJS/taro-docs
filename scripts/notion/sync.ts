import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import 'dotenv/config'

import writeFile from '../write'
import { databaseId, notion } from './common'

export async function fetchTechnicalCommittee(list: QueryDatabaseResponse['results'] = [], start_cursor?: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{
      "property": "role",
      "direction": "ascending"
    }, {
      "property": "team",
      "direction": "ascending"
    }, {
      "property": "group",
      "direction": "ascending"
    }, {
      "property": "contributions",
      "direction": "descending"
    }, {
      "property": "remarks",
      "direction": "ascending"
    }, {
      "property": "github",
      "direction": "ascending"
    }],
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
