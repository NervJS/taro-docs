import 'dotenv/config'

import { updateContributors } from './update-utils'

(async () => {
  await updateContributors({
    repo: 'taro',
  })
  await updateContributors({
    repo: 'taro-ui',
    remarks: [
      {
        type: 'text',
        text: {
          content: 'taro-ui',
          link: {
            url: 'https://github.com/NervJS/taro-ui'
          }
        },
      },
      {
        type: 'text',
        text: {
          content: '合作者',
        },
      }
    ]
  })
  await updateContributors({
    repo: 'taro-docs',
    remarks: [
      {
        type: 'text',
        text: {
          content: 'taro-docs',
          link: {
            url: 'https://github.com/NervJS/taro-docs'
          }
        },
      },
      {
        type: 'text',
        text: {
          content: '合作者',
        },
      }
    ]
  })
})()
