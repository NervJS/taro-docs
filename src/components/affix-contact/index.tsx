import React from "react";
import { useState } from "react";
import ImageList from '../../../docs/mdx/image-list';

import './index.css'

export default function AffixContact() {

  const [showQrCode, setShowQrCode] = useState(false);

  const toggleShowQrCode = () => {
    setShowQrCode(!showQrCode)
  }

  return <div className="affix-contact-container" onClick={toggleShowQrCode}>
    <div className={`affix-contact-btn ${showQrCode ? 'affix-contact-btn-show' : 'affix-contact-btn-hide'}`}>
      <svg 
        t="1669124395474" 
        class="icon" 
        viewBox="0 0 1024 1024" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg"
        p-id="3452" 
        width="20" 
        height="20" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M396.359111 970.666667a28.444444 28.444444 0 0 1-28.444444-29.184l2.773333-105.912889h-71.324444c-54.357333 0-93.169778-44.8-93.169778-99.854222V363.989333c0-53.660444 38.812444-97.322667 93.169778-97.322666h570.837333c54.357333 0 104.007111 43.648 104.007111 97.322666v371.712c0 55.054222-49.635556 99.854222-104.007111 99.854223H593.948444l-181.020444 129.777777a28.344889 28.344889 0 0 1-16.568889 5.333334z m-96.967111-647.111111c-23.381333 0-36.280889 17.763556-36.280889 40.433777v371.712c0 23.310222 13.681778 42.965333 36.280889 42.965334h100.522667a28.401778 28.401778 0 0 1 28.430222 29.198222l-2.048 77.895111 141.923555-101.745778c4.835556-3.470222 10.624-5.333333 16.568889-5.333333h285.411556c22.599111 0 47.118222-19.669333 47.118222-42.965333V363.989333c0-22.670222-23.736889-40.433778-47.118222-40.433777H299.392z" fill="#1e80ff" p-id="3453"></path>
        <path d="M95.004444 599.480889c-6.712889 0-10.723556-2.360889-16.142222-7.168C58.055111 573.895111 49.777778 549.703111 49.777778 522.368V150.656c0-53.660444 38.812444-97.322667 93.169778-97.322667h570.837333c54.357333 0 104.007111 43.648 104.007111 97.322667v16.455111a28.444444 28.444444 0 0 1-56.888889 0v-16.455111c0-22.670222-23.736889-40.433778-47.118222-40.433778H142.947556C119.566222 110.222222 106.666667 127.985778 106.666667 150.656v371.712c0 10.894222 1.422222 19.84 9.912889 27.363556 11.761778 10.410667 11.505778 28.416 1.080888 40.163555-5.632 6.328889-14.805333 9.585778-22.656 9.585778z" fill="#1e80ff" p-id="3454"></path>
        <path d="M485.248 451.555556h-113.777778a14.222222 14.222222 0 1 1 0-28.444445h113.777778a14.222222 14.222222 0 1 1 0 28.444445zM684.359111 451.555556h-142.222222a14.222222 14.222222 0 1 1 0-28.444445h142.222222a14.222222 14.222222 0 1 1 0 28.444445zM798.136889 451.555556h-56.888889a14.222222 14.222222 0 1 1 0-28.444445h56.888889a14.222222 14.222222 0 1 1 0 28.444445zM428.359111 522.666667h-56.888889a14.222222 14.222222 0 1 1 0-28.444445h56.888889a14.222222 14.222222 0 1 1 0 28.444445zM599.025778 522.666667h-113.777778a14.222222 14.222222 0 1 1 0-28.444445h113.777778a14.222222 14.222222 0 1 1 0 28.444445zM798.136889 522.666667h-142.222222a14.222222 14.222222 0 1 1 0-28.444445h142.222222a14.222222 14.222222 0 1 1 0 28.444445z" fill="#1e80ff" p-id="3455"></path>
        <path d="M513.692444 608h-142.222222a14.222222 14.222222 0 1 1 0-28.444444h142.222222a14.222222 14.222222 0 1 1 0 28.444444zM712.803556 608h-142.222223a14.222222 14.222222 0 1 1 0-28.444444h142.222223a14.222222 14.222222 0 1 1 0 28.444444zM798.136889 608h-28.444445a14.222222 14.222222 0 1 1 0-28.444444h28.444445a14.222222 14.222222 0 1 1 0 28.444444z" fill="#1e80ff" p-id="3456"></path>
        <path d="M428.359111 679.111111h-56.888889a14.222222 14.222222 0 1 1 0-28.444444h56.888889a14.222222 14.222222 0 1 1 0 28.444444zM584.803556 679.111111h-99.555556a14.222222 14.222222 0 1 1 0-28.444444h99.555556a14.222222 14.222222 0 1 1 0 28.444444z" fill="#1e80ff" p-id="3457"></path>
      </svg>
    </div>
    <div className="affix-contact-content" style={{display: showQrCode ? 'block': 'none'}}>
      <span className="affix-contact-content-tips">选择下列对应的群，使用微信扫码添加，会收到入群二维码，再扫群码添加即可。</span>
      <ImageList
        height={148}
        list={[{
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_qr.png',
          label: 'Taro'
        }, {
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_vue_qr.png',
          label: 'Taro Vue'
        }, {
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_rn_qr.png',
          label: 'Taro RN'
        }, {
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_harmony_qr.png',
          label: 'Taro x Harmony'
        }, {
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_lark_qr.png',
          label: 'Taro Lark'
        }, {
          image: 'http://storage.360buyimg.com/taro-jd-com/static/contact_taro_nutui_qr.png',
          label: 'Taro x NutUI'
        }]}
      />
    </div>
  </div>
}