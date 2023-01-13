import 'dotenv/config'

import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { head,pick, set, unset } from 'lodash'
import { RichTextItemResponse, TextRequest } from 'notion'

import writeFile from '../write'
import { databaseId, getProperty, notion, sleep } from './common'
import { fetchUser } from './github'
import { updateMember } from './update-utils'

export async function fetchTechnicalCommittee (list: QueryDatabaseResponse['results'] = [], start_cursor?: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{
      'property': 'role',
      'direction': 'ascending'
    }, {
      'property': 'alumni',
      'direction': 'ascending'
    }, {
      'property': 'team',
      'direction': 'ascending'
    }, {
      'property': 'group',
      'direction': 'ascending'
    }, {
      'property': 'contributions',
      'direction': 'descending'
    }, {
      'property': 'remarks',
      'direction': 'ascending'
    }, {
      'property': 'github',
      'direction': 'ascending'
    }],
    start_cursor
  })
  list = list.concat(response.results || [])
  if (response.has_more && response.next_cursor) {
    return fetchTechnicalCommittee(list, response.next_cursor)
  }
  return list
}

export async function updateTechnicalCommittee () {
  const list = await fetchTechnicalCommittee()
  const data = await list.reduce(async (p, member) => {
    const members = await p
    const cover = getProperty(member, 'cover') as { url: TextRequest } | null
    const title = getProperty(member.properties, 'title') as Array<RichTextItemResponse>
    const name = title?.[0]?.text?.content
    if (!cover?.url && name) {
      const user = await fetchUser(name)
      try {
        const member = await updateMember(user)
        await sleep()
        if (member) {
          members.push(member)
          return members
        }
      } catch (error) {
        console.error(`Notion: update ${name} with error`, error)
      }
    }
    members.push(member)
    return members
  }, Promise.resolve([]))
  writeFile(`static/data/contributors.json`, JSON.stringify(data.map(e => {
    const title = head(e.properties.title?.title)
    title && set(e, ['properties', 'title', 'title'], [title])
    unset(e, ['properties', 'title', 'title', '0', 'annotations'])
    e.properties = pick(e.properties, ['title', 'github', 'role', 'team', 'group', 'alumni'])
    return pick(e, ['cover', 'properties'])
  }), undefined, 2))
}

updateTechnicalCommittee()
