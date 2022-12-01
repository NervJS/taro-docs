import React from "react";
import { useState } from "react";
import ImageList from '../../../docs/mdx/image-list';
import AffixContactMsgSvg from '../../../static/img/svg/affix-contact-msg.svg';
import AffixContactCloseSvg from '../../../static/img/svg/affix-contact-close.svg';

import './index.css'

export default function AffixContact() {

  const [showQrCode, setShowQrCode] = useState(false);

  const toggleShowQrCode = () => {
    setShowQrCode(!showQrCode)
  }

  return <div className="affix-contact-container">
    <div 
      className={`affix-contact-btn ${showQrCode ? 'affix-contact-btn-show' : 'affix-contact-btn-hide'}`} 
      onClick={toggleShowQrCode}
    >
      {!showQrCode && <AffixContactMsgSvg  />}
      {showQrCode && <AffixContactCloseSvg />}
    </div>
    <div className={`affix-contact-content ${showQrCode ? 'active':''}`}>
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