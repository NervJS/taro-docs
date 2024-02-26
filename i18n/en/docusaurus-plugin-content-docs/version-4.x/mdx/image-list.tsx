import o2logo from '@site/static/img/o2logo.png'
import React from 'react'

interface Item {
  image?: string
  label?: string
}

export default function ImageList ({
  list = [],
  height = 88
}) {
  return <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
    {list.map((item: Item, index) => <div
      key={index}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 10px 10px 0', height: '100%' }}
    >
      <img src={item.image || o2logo} style={{ height }} />
      {item.label && <label>{item.label}</label>}
    </div>)}
  </div>
}
