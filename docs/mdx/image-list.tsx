import o2logo from '@site/static/img/o2logo@2x.png'
import React from 'react'

interface IList {
  list?: IListItem[]
  height?: number
}

interface IListItem {
  image?: string
  label?: string
}

export default function ImageList ({
  list = [],
  height = 88
}: IList) {
  return <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
    {list.map((item: IListItem, index) => <div
      key={index}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 10px 10px 0', height: '100%' }}
    >
      <img src={item.image || o2logo} style={{ height }} />
      {item.label && <label>{item.label}</label>}
    </div>)}
  </div>
}
