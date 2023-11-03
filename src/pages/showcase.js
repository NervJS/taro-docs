

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import React, { useEffect } from 'react'

function Showcase () {
  useEffect(() => {
    const appScript = document.querySelector('#appscript')
    if (appScript) {
      window.location.reload()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://nervjs.github.io/taro-user-cases/index.js'
    script.id = 'appscript'
    !document.userCases && document.body.appendChild(script)
  }, [])
  return (
    <Layout
      permalink="/showcase"
      description="Taro 案例页，微信小程序、H5、支付宝小程序、百度小程序、移动端应用、QQ小程序、抖音小程序、京东小程序, 如果你也使用 Taro，提交你的案例让我们知道你，以便更好地为你服务，同时也让更多的人了解 Taro 的能力">
      <div className="container margin-vert--xl">
        <p className="tip">如果你想要找的是开源的可参考代码案例，点击 <Link to="/docs/composition">Taro 资源合集</Link></p>
        <p className="tip">提交案例，只需二维码和简单的信息，既展示你的作品，也给使用 Taro 的小伙伴信心，给 Taro 贡献者以鼓励，<Link to="https://github.com/NervJS/taro-user-cases/edit/master/index.js">点击提交案例</Link></p>
        <div className="app" id="app"></div>
        <h2 id="pc">使用 Taro 搭建的系统：</h2>
        <p className="tip"><Link to="https://diy.seowhy.com/">搜外七巧板</Link></p>
        <p className="tip">
          <Link className="tip_a" to="https://diy.seowhy.com/">
            <img width="200" src="https://diy.seowhy.com/custom/static/media/logo.0c372c72.png" />
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default Showcase
