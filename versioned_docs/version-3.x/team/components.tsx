import Link from '@docusaurus/Link'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import members from '@site/static/data/contributors.json'
import o2logo from '@site/static/img/o2logo.png'
import taro from '@site/static/img/taro-logo_180.png'
import React from 'react'

interface ITeam {
  href?: string
  image?: string
}

export function TeamList ({
  list = [],
  height = 88
}) {
  return <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'center' }}>
    {list.map((item: ITeam, index) => <Link
      key={index}
      to={item.href || '#'}
      style={{ display: 'inline-block', margin: '0 10px 10px 0' }}
    >
      <img src={item.image || o2logo} style={{ height }} />
    </Link>)}
  </div>
}

export function ListPage ({ type = 'role', name = '', alumni = false, full = false, ...props }) {
  const list = members.filter(e => {
    const properties = e.properties || ''
    const property = properties[type] || {}
    const alumniVal = properties?.alumni?.formula || {}
    const data = property?.[property.type]
    if (alumni && !alumniVal[alumniVal.type])
      return false
    if (!alumni && alumniVal[alumniVal.type])
      return false
    if (data instanceof Array) {
      return data.find(e => e.id === props[type] || (name && e.name.includes(name)))
    } else if (data) {
      return data.id === props[type] || data.name.includes(name)
    }
    return false
  }) as unknown as QueryDatabaseResponse['results']

  return <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
    {list.map((item: any, index) => {
      const cover = item.cover || {}
      const properties = item.properties || {}
      const title = properties?.title?.title?.find(e => e?.type === 'text')?.text
      if (!full && index > 5) return
      return <Link
        key={index}
        to={properties?.github?.url || '#'}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 10px 10px 0' }}
      >
        <div
          style={{
            height: 88, width: 88,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: `url(${cover[cover?.type]?.url || taro})`,
          }}
        />
        <span style={{ width: 88, textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{title?.content || 'Taro 贡献者'}</span>
      </Link>
    })}
    {!full && <span style={{ margin: 44 }}>...</span>}
  </div>
}
