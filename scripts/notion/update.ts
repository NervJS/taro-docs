import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import 'dotenv/config'
import { IGithubContributor } from 'github'
import fetch from 'node-fetch'
import { RichTextItemResponse } from 'notion'

import { databaseId, notion, getProperty, getPropertyTitle } from './common'

export async function fetchContributors(list = [], page = 1, perPage = 100) {
  const response = await fetch(`https://api.github.com/repos/NervJS/taro/contributors?page=${page}&per_page=${perPage}`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      // authorization: `token ${this.token}`
    }
  }).then((e) => e.json())
  if (response.length === perPage) {
    return fetchContributors(list.concat(response), ++page, perPage)
  }
  return list.concat(response)
}

export async function checkMember (github: string): Promise<QueryDatabaseResponse['results'][number]> {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'github',
      url: {
        contains: github
      }
    }
  })
  return response.results[0]
}

export async function updateMember (item: IGithubContributor) {
  if (item.type !== 'User') return
  const member: any = await checkMember(item.html_url || '')
  const params: any = {
    properties: {}
  }
  if (member) {
    const cover = getProperty(member, 'cover')
    const title: Array<RichTextItemResponse> = getProperty(member.properties, 'title') as Array<RichTextItemResponse>
    const titleVal = getPropertyTitle(member.properties)
    const github = getProperty(member.properties, 'github')
    const contributions = getProperty(member.properties, 'contributions')
    params.page_id = member.id
    let shouldUpdate = false
    if (cover !== item.avatar_url) {
      shouldUpdate = true
      params.cover = {
        type: 'external',
        external: {
          url: item.avatar_url || ''
        }
      }
    }
    if (titleVal.content !== item.login || titleVal.link.url !== item.html_url) {
      shouldUpdate = true
      params.properties.title = {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: item.login || '',
              link: {
                url: item.html_url || ''
              }
            }
          },
          ...title.slice(1)
        ]
      }
    }
    if (github !== item.html_url) {
      shouldUpdate = true
      params.properties.github = {
        type: 'url',
        url: item.html_url
      }
    }
    if (contributions !== item.contributions) {
      shouldUpdate = true
      params.properties.contributions = {
        type: 'number',
        number: item.contributions
      }
    }
    if (shouldUpdate) {
      await notion.pages.update(params)
      console.log(`Notion: 更新 ${item.login} 信息`)
    }
  } else {
    params.parent = {
      database_id: databaseId
    }
    params.cover = {
      type: 'external',
      external: {
        url: item.avatar_url || ''
      }
    }
    params.properties.title = {
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: item.login || '',
            link: {
              url: item.html_url || ''
            }
          }
        },
      ]
    }
    params.properties.github = {
      type: 'url',
      url: item.html_url
    }
    params.properties.contributions = {
      type: 'number',
      number: item.contributions
    }
    params.properties.role = {
      type: 'select',
      select: {
        id: '7c557d2c-e604-45a3-8680-05867408143c',
        name: '个人贡献者',
      }
    }
    // params.properties.last_update = {
    //   type: 'date',
    //   date: Date.now()
    // }
    await notion.pages.create(params)
    console.log(`Notion: 创建 ${item.login} 信息`)
  }
}

export async function updateContributors() {
  const list = await fetchContributors()
  console.log(`Tips: 查询到 ${list.length} 位贡献者。`)
  for (let i = 0; i < list.length; i++) {
    try {
      updateMember(list[i])
      await sleep()
    } catch (error) {
      console.error(`Notion: update ${list[i].login} with error`, error)
    }
  }
}

updateContributors()

export const sleep = (ms = 500) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
