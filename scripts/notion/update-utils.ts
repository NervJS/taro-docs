import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { IGithubContributor } from 'github'
import { QueryDatabaseProperty, RichTextItemResponse, TextRequest } from 'notion'

import { databaseId, notion, getProperty, getPropertyTitle, sleep } from './common'
import { fetchContributors } from './github'

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

export async function updateMember (item: IGithubContributor, remarks?: QueryDatabaseProperty['rich_text']) {
  if (item.type !== 'User') return
  const member: any = await checkMember(item.html_url || '')
  const params: any = {
    properties: {}
  }
  if (member) {
    const cover = getProperty(member, 'cover') as { url: TextRequest } | null
    const title = getProperty(member.properties, 'title') as Array<RichTextItemResponse>
    const remarksVal = getProperty(member.properties, 'remarks') as Array<RichTextItemResponse>
    const titleVal = getPropertyTitle(member.properties)
    const github = getProperty(member.properties, 'github')
    const contributions = getProperty(member.properties, 'contributions')
    params.page_id = member.id
    let shouldUpdate = false
    if (cover?.url !== item.avatar_url) {
      shouldUpdate = true
      params.cover = {
        type: 'external',
        external: {
          url: item.avatar_url || ''
        }
      }
    }
    if (titleVal.content !== item.login || titleVal?.link?.url !== item.html_url) {
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
    if (!remarks?.length && typeof item.contributions === 'number' && contributions !== item.contributions) {
      shouldUpdate = true
      params.properties.contributions = {
        type: 'number',
        number: item.contributions
      }
    }
    if (Number(remarks?.length) > 0 && Number(remarksVal?.length) === 0) {
      shouldUpdate = true
      params.properties.remarks = {
        type: 'rich_text',
        rich_text: remarks
      }
    }
    if (shouldUpdate) {
      const res = await notion.pages.update(params)
      console.log(`Notion: 更新 ${item.login} 信息`)
      return res
    } else {
      console.log(`Notion: ${item.login} 信息无更新`)
    }
  } else {
    params.parent = {
      database_id: databaseId
    }
    if (item.avatar_url) {
      params.cover = {
        type: 'external',
        external: {
          url: item.avatar_url || ''
        }
      }
    }
    if (item.login) {
      params.properties.title = {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: item.login,
              link: item.html_url ? {
                url: item.html_url
              } : null
            }
          },
        ]
      }
    }
    if (item.html_url) {
      params.properties.github = {
        type: 'url',
        url: item.html_url
      }
    }
    if (item.contributions) {
      params.properties.contributions = {
        type: 'number',
        number: item.contributions
      }
    }
    params.properties.role = {
      type: 'multi_select',
      multi_select: [{
        id: '7c557d2c-e604-45a3-8680-05867408143c',
        name: '个人贡献者',
      }]
    }
    if (remarks) {
      params.properties.remarks = remarks
    }
    // params.properties.last_update = {
    //   type: 'date',
    //   date: Date.now()
    // }
    const res = await notion.pages.create(params)
    console.log(`Notion: 创建 ${item.login} 信息`)
    return res
  }
}

interface IUpdateContributorsArgs {
  owner?: string
  repo?: string
  remarks?: QueryDatabaseProperty['rich_text']
}
export async function updateContributors({ owner = 'NervJS', repo = 'taro', remarks }: IUpdateContributorsArgs) {
  const list = await fetchContributors({ owner, repo })
  console.log(`Tips: ${owner}/${repo} 查询到 ${list.length} 位贡献者。`)
  for (let i = 0; i < list.length; i++) {
    try {
      updateMember(list[i], remarks)
      await sleep()
    } catch (error) {
      console.error(`Notion: update ${list[i].login} with error`, error)
    }
  }
}
