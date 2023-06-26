module.exports = {
  docs: {
    关于Taro: [
      'README',
      'version',
      {
        label: 'Taro 团队',
        type: 'category',
        items: ['team/index', 'team/role-committee', 'team/role-collaborator', 'team/role-triage', 'team/role-committer', 'team/58anjuke'],
      },
      'communicate'
    ],
    快速开始: ['GETTING-STARTED', 'composition'],
    基础教程: [
      'folder',
      'cli',
      {
        label: '配置',
        type: 'category',
        items: ['env-mode-config', 'config', 'size', 'app-config', 'page-config', 'project-config', 'babel-config'],
      },
      {
        label: 'React',
        type: 'category',
        items: [
          'react-overall',
          'react-entry',
          'react-page',
          'hooks',
          'react-error-handling',
          'react-devtools',
          'preact',
          'react-18'
        ],
      },
      {
        label: 'Vue',
        type: 'category',
        items: [
          'vue-overall',
          'vue-entry',
          'vue-page',
          'vue3',
          'composition-api',
          'vue-devtools'
        ],
      },
      {
        'label': '路由功能',
        'type': 'category',
        'items': [
          'router',
          'router-extend'
        ]
      },
      'static-reference',
      'ref',
      {
        label: '多端开发',
        type: 'category',
        items: ['envs', 'envs-debug'],
      },
      {
        label: '小程序',
        type: 'category',
        items: ['come-from-miniapp', 'wxcloudbase', 'miniprogram-plugin', 'independent-subpackage', 'custom-tabbar', 'mini-troubleshooting']
      },
      'h5',
      {
        label: 'React Native',
        type: 'category',
        items: ['react-native', 'react-native-remind'],
      },
      'harmony'
    ],
    进阶指南: [
      'config-detail',
      'html',
      'use-h5',
      'request',
      'jquery-like',
      'dynamic-import',
      {
        label: '插件功能',
        type: 'category',
        items: [
          'plugin',
          'plugin-custom'
        ]
      },
      {
        label: '性能优化',
        type: 'category',
        items: [
          'optimized',
          'prerender',
          'virtual-list'
        ]
      },
      {
        label: '编译优化',
        type: 'category',
        items: [
          'compile-optimized',
          'mini-split-chunks-plugin',
          'prebundle'
        ]
      },
      {
        label: '原生混合',
        type: 'category',
        items: [
          'hybrid',
          'taro-in-miniapp',
        ]
      },
      {
        label: '反向转换',
        type: 'category',
        items: [
          'taroize',
          'convert-to-react',
          'taroize-troubleshooting'
        ]
      },
      {
        label: '扩展编译平台',
        type: 'category',
        items: [
          'platform-plugin/index',
          'platform-plugin/how',
          'platform-plugin/platform-mini',
          'platform-plugin/reconciler',
          'platform-plugin/template',
          'platform-plugin/platform-web'
        ]
      },
      {
        label: '测试工具',
        type: 'category',
        items: [
          'test-utils/index',
          'test-utils/render',
          'test-utils/queries',
          'test-utils/fire-event',
          'test-utils/life-cycle',
          'test-utils/other'
        ]
      },
      'external-libraries'
    ],
    社区生态: [
      'treasures',
      {
        label: '状态管理',
        type: 'category',
        items: [
          'redux',
          'vuex',
          'pinia'
        ]
      },
      'css-modules',
      'css-in-js',
      'ossa',
      'nutui',
      'vant',
      'plugin-mini-ci',
      'template',
      'youshu',
      'report',
      'seowhy'
    ],
    CONTRIBUTING: [
      'join-in',
      'CONTRIBUTING',
      'CONTRIBUTING-GUIDE',
      'codebase-overview',
      'debug-config',
      'implement-note',
      'taro-dom'
    ]
  },
  'components': {
    '关于组件库': [
      'components-desc',
      'components/page-meta',
      'components/common',
      'components/event',
    ],
    '视图容器': [
      'components/viewContainer/cover-image',
      'components/viewContainer/cover-view',
      'components/viewContainer/grid-view',
      'components/viewContainer/list-view',
      'components/viewContainer/custom-wrapper',
      'components/viewContainer/match-media',
      'components/viewContainer/movable-area',
      'components/viewContainer/movable-view',
      'components/viewContainer/native-slot',
      'components/viewContainer/page-container',
      'components/viewContainer/root-portal',
      'components/viewContainer/scroll-view',
      'components/viewContainer/share-element',
      'components/viewContainer/sticky-header',
      'components/viewContainer/sticky-section',
      'components/viewContainer/slot',
      'components/viewContainer/swiper',
      'components/viewContainer/swiper-item',
      'components/viewContainer/view'
    ],
    '基础内容': [
      'components/base/icon',
      'components/base/text',
      'components/base/progress',
      'components/base/rich-text'
    ],
    '表单组件': [
      'components/forms/button',
      'components/forms/checkbox',
      'components/forms/checkbox-group',
      'components/forms/editor',
      'components/forms/form',
      'components/forms/input',
      'components/forms/keyboard-accessory',
      'components/forms/label',
      'components/forms/picker',
      'components/forms/picker-view',
      'components/forms/picker-view-column',
      'components/forms/radio',
      'components/forms/radio-group',
      'components/forms/slider',
      'components/forms/switch',
      'components/forms/textarea'
    ],
    '导航': [
      'components/navig/functional-page-navigator',
      'components/navig/navigation-bar',
      'components/navig/navigator',
      'components/navig/tab-item',
      'components/navig/tabs',
    ],
    '媒体组件': [
      'components/media/animation-video',
      'components/media/animation-view',
      'components/media/ar-camera',
      'components/media/audio',
      'components/media/camera',
      'components/media/channel-live',
      'components/media/channel-video',
      'components/media/image',
      'components/media/live-player',
      'components/media/live-pusher',
      'components/media/lottie',
      'components/media/rtc-room',
      'components/media/rtc-room-item',
      'components/media/video',
      'components/media/voip-room'
    ],
    '地图': [
      'components/maps/map'
    ],
    '画布': [
      'components/canvas/canvas'
    ],
    '开放能力': [
      'components/open/ad',
      'components/open/ad-custom',
      'components/open/aweme-data',
      'components/open/comment-list',
      'components/open/comment-detail',
      'components/open/contact-button',
      'components/open/follow-swan',
      'components/open/inline-payment-panel',
      'components/open/lifestyle',
      'components/open/like',
      'components/open/login',
      'components/open/official-account',
      'components/open/open-data',
      'components/open/web-view',
      'components/open/others'
    ]
  },
  'API': {
    '关于API': [
      'apis/about/desc',
      'apis/about/env',
      'apis/about/events',
      'apis/General',
      {
        'Hooks': [
          'apis/taro.hooks/useDidShow',
          'apis/taro.hooks/useDidHide',
          'apis/taro.hooks/usePullDownRefresh',
          'apis/taro.hooks/useReachBottom',
          'apis/taro.hooks/usePageScroll',
          'apis/taro.hooks/useResize',
          'apis/taro.hooks/useShareAppMessage',
          'apis/taro.hooks/useTabItemTap',
          'apis/taro.hooks/useAddToFavorites',
          'apis/taro.hooks/useShareTimeline',
          'apis/taro.hooks/useSaveExitState',
          'apis/taro.hooks/useLaunch',
          'apis/taro.hooks/useError',
          'apis/taro.hooks/useUnhandledRejection',
          'apis/taro.hooks/usePageNotFound',
          'apis/taro.hooks/useLoad',
          'apis/taro.hooks/useUnload',
          'apis/taro.hooks/useReady',
          'apis/taro.hooks/useRouter',
          'apis/taro.hooks/useTitleClick',
          'apis/taro.hooks/useOptionMenuClick',
          'apis/taro.hooks/usePullIntercept',
        ],
      },
      {
        '拓展': [
          'apis/taro.extend/eventCenter',
          'apis/taro.extend/getEnv',
          'apis/taro.extend/pxTransform',
          'apis/taro.extend/initPxTransform',
          'apis/taro.extend/getAppInfo',
          'apis/taro.extend/getRenderer',
          'apis/taro.extend/requirePlugin',
          'apis/taro.extend/getCurrentInstance',
          'apis/taro.extend/setGlobalDataPlugin',
          'apis/taro.extend/getTabBar',
          'apis/taro.extend/interceptorify',
        ],
      },
    ],
    '框架': [
      'apis/framework/App',
      'apis/framework/getApp',
      'apis/framework/getCurrentPages',
      'apis/framework/Page',
    ],
    '基础': [
      'apis/base/env',
      'apis/base/canIUse',
      'apis/base/canIUseWebp',
      'apis/base/base64ToArrayBuffer',
      'apis/base/arrayBufferToBase64',
      {
        'label': '系统',
        'type': 'category',
        'items': [
          'apis/base/system/openSystemBluetoothSetting',
          'apis/base/system/openAppAuthorizeSetting',
          'apis/base/system/getWindowInfo',
          'apis/base/system/getSystemSetting',
          'apis/base/system/getSystemInfoSync',
          'apis/base/system/getSystemInfoAsync',
          'apis/base/system/getSystemInfo',
          'apis/base/system/getSkylineInfoSync',
          'apis/base/system/getSkylineInfo',
          'apis/base/system/getRendererUserAgent',
          'apis/base/system/getDeviceInfo',
          'apis/base/system/getAppBaseInfo',
          'apis/base/system/getAppAuthorizeSetting',
        ]
      },
      {
        'label': '更新',
        'type': 'category',
        'items': [
          'apis/base/update/updateWeChatApp',
          'apis/base/update/getUpdateManager',
          'apis/base/update/UpdateManager',
        ]
      },
      {
        'label': '小程序',
        'type': 'category',
        'items': [
          {
            'label': '生命周期',
            'type': 'category',
            'items': [
              'apis/base/weapp/life-cycle/getLaunchOptionsSync',
              'apis/base/weapp/life-cycle/getEnterOptionsSync',
            ]
          },
          {
            'label': '应用级事件',
            'type': 'category',
            'items': [
              'apis/base/weapp/app-event/onUnhandledRejection',
              'apis/base/weapp/app-event/onThemeChange',
              'apis/base/weapp/app-event/onPageNotFound',
              'apis/base/weapp/app-event/onError',
              'apis/base/weapp/app-event/onAudioInterruptionEnd',
              'apis/base/weapp/app-event/onAudioInterruptionBegin',
              'apis/base/weapp/app-event/onAppShow',
              'apis/base/weapp/app-event/onAppHide',
              'apis/base/weapp/app-event/offUnhandledRejection',
              'apis/base/weapp/app-event/offThemeChange',
              'apis/base/weapp/app-event/offPageNotFound',
              'apis/base/weapp/app-event/offError',
              'apis/base/weapp/app-event/offAudioInterruptionEnd',
              'apis/base/weapp/app-event/offAudioInterruptionBegin',
              'apis/base/weapp/app-event/offAppShow',
              'apis/base/weapp/app-event/offAppHide',
            ]
          },
        ]
      },
      {
        'label': '调试',
        'type': 'category',
        'items': [
          'apis/base/debug/setEnableDebug',
          'apis/base/debug/getRealtimeLogManager',
          'apis/base/debug/getLogManager',
          'apis/base/debug/console',
          'apis/base/debug/LogManager',
          'apis/base/debug/RealtimeLogManager',
          'apis/base/debug/RealtimeTagLogManager',
        ]
      },
      {
        'label': '性能',
        'type': 'category',
        'items': [
          'apis/base/performance/reportPerformance',
          'apis/base/performance/preloadWebview',
          'apis/base/performance/preloadSkylineView',
          'apis/base/performance/preloadAssets',
          'apis/base/performance/getPerformance',
          'apis/base/performance/EntryList',
          'apis/base/performance/Performance',
          'apis/base/performance/PerformanceEntry',
          'apis/base/performance/PerformanceObserver',
        ]
      },
      {
        'label': '加密',
        'type': 'category',
        'items': [
          'apis/base/crypto/getUserCryptoManager',
          'apis/base/crypto/UserCryptoManager',
          'apis/base/crypto/getRandomValues',
        ]
      },
      'apis/base/env/env',
      'apis/base/preload',
    ],
    '路由': [
      'apis/route/switchTab',
      'apis/route/reLaunch',
      'apis/route/redirectTo',
      'apis/route/navigateTo',
      'apis/route/navigateBack',
      'apis/route/EventChannel',
    ],
    '跳转': [
      'apis/navigate/openBusinessView',
      'apis/navigate/openEmbeddedMiniProgram',
      'apis/navigate/navigateToMiniProgram',
      'apis/navigate/navigateBackMiniProgram',
      'apis/navigate/exitMiniProgram',
    ],
    '转发': [
      'apis/share/updateShareMenu',
      'apis/share/showShareMenu',
      'apis/share/showShareImageMenu',
      'apis/share/shareVideoMessage',
      'apis/share/shareFileMessage',
      'apis/share/onCopyUrl',
      'apis/share/offCopyUrl',
      'apis/share/hideShareMenu',
      'apis/share/getShareInfo',
      'apis/share/authPrivateMessage',
    ],
    '界面': [
      {
        'label': '交互',
        'type': 'category',
        'items': [
          'apis/ui/interaction/showToast',
          'apis/ui/interaction/showModal',
          'apis/ui/interaction/showLoading',
          'apis/ui/interaction/showActionSheet',
          'apis/ui/interaction/hideToast',
          'apis/ui/interaction/hideLoading',
          'apis/ui/interaction/enableAlertBeforeUnload',
          'apis/ui/interaction/disableAlertBeforeUnload',
        ]
      },
      {
        'label': '导航栏',
        'type': 'category',
        'items': [
          'apis/ui/navigation-bar/showNavigationBarLoading',
          'apis/ui/navigation-bar/setNavigationBarTitle',
          'apis/ui/navigation-bar/setNavigationBarColor',
          'apis/ui/navigation-bar/hideNavigationBarLoading',
          'apis/ui/navigation-bar/hideHomeButton',
        ]
      },
      {
        'label': '背景',
        'type': 'category',
        'items': [
          'apis/ui/background/setBackgroundTextStyle',
          'apis/ui/background/setBackgroundColor',
        ]
      },
      {
        'label': 'Tab Bar',
        'type': 'category',
        'items': [
          'apis/ui/tab-bar/showTabBarRedDot',
          'apis/ui/tab-bar/showTabBar',
          'apis/ui/tab-bar/setTabBarStyle',
          'apis/ui/tab-bar/setTabBarItem',
          'apis/ui/tab-bar/setTabBarBadge',
          'apis/ui/tab-bar/removeTabBarBadge',
          'apis/ui/tab-bar/hideTabBarRedDot',
          'apis/ui/tab-bar/hideTabBar',
        ]
      },
      {
        'label': '字体',
        'type': 'category',
        'items': [
          'apis/ui/fonts/loadFontFace',
        ]
      },
      {
        'label': '下拉刷新',
        'type': 'category',
        'items': [
          'apis/ui/pull-down-refresh/stopPullDownRefresh',
          'apis/ui/pull-down-refresh/startPullDownRefresh',
        ]
      },
      {
        'label': '滚动',
        'type': 'category',
        'items': [
          'apis/ui/scroll/pageScrollTo',
          'apis/ui/scroll/ScrollViewContext',
        ]
      },
      {
        'label': '动画',
        'type': 'category',
        'items': [
          'apis/ui/animation/createAnimation',
          'apis/ui/animation/Animation',
        ]
      },
      {
        'label': '置顶',
        'type': 'category',
        'items': [
          'apis/ui/sticky/setTopBarText',
        ]
      },
      {
        'label': '自定义组件',
        'type': 'category',
        'items': [
          'apis/ui/custom-component/nextTick',
        ]
      },
      {
        'label': '菜单',
        'type': 'category',
        'items': [
          'apis/ui/menu/getMenuButtonBoundingClientRect',
        ]
      },
      {
        'label': '窗口',
        'type': 'category',
        'items': [
          'apis/ui/window/setWindowSize',
          'apis/ui/window/onWindowResize',
          'apis/ui/window/offWindowResize',
          'apis/ui/window/checkIsPictureInPictureActive',
        ]
      },
    ],
    '网络': [
      {
        'label': '发起请求',
        'type': 'category',
        'items': [
          'apis/network/request/request',
          'apis/network/request/RequestTask',
          'apis/network/request/addInterceptor',
          'apis/network/request/cleanInterceptors'
        ]
      },
      {
        'label': '下载',
        'type': 'category',
        'items': [
          'apis/network/download/downloadFile',
          'apis/network/download/DownloadTask',
        ]
      },
      {
        'label': '上传',
        'type': 'category',
        'items': [
          'apis/network/upload/uploadFile',
          'apis/network/upload/UploadTask',
        ]
      },
      {
        'label': 'WebSocket',
        'type': 'category',
        'items': [
          'apis/network/websocket/sendSocketMessage',
          'apis/network/websocket/onSocketOpen',
          'apis/network/websocket/onSocketMessage',
          'apis/network/websocket/onSocketError',
          'apis/network/websocket/onSocketClose',
          'apis/network/websocket/connectSocket',
          'apis/network/websocket/closeSocket',
          'apis/network/websocket/SocketTask',
        ]
      },
      {
        'label': 'mDNS',
        'type': 'category',
        'items': [
          'apis/network/mdns/stopLocalServiceDiscovery',
          'apis/network/mdns/startLocalServiceDiscovery',
          'apis/network/mdns/onLocalServiceResolveFail',
          'apis/network/mdns/onLocalServiceLost',
          'apis/network/mdns/onLocalServiceFound',
          'apis/network/mdns/onLocalServiceDiscoveryStop',
          'apis/network/mdns/offLocalServiceResolveFail',
          'apis/network/mdns/offLocalServiceLost',
          'apis/network/mdns/offLocalServiceFound',
          'apis/network/mdns/offLocalServiceDiscoveryStop'
        ]
      },
      {
        'label': 'TCP 通信',
        'type': 'category',
        'items': [
          'apis/network/tcp/createTCPSocket',
          'apis/network/tcp/TCPSocket',
        ]
      },
      {
        'label': 'UDP 通信',
        'type': 'category',
        'items': [
          'apis/network/udp/createUDPSocket',
          'apis/network/udp/UDPSocket',
        ]
      },
    ],
    '支付': [
      'apis/payment/requestPayment',
      'apis/payment/requestOrderPayment',
      'apis/payment/faceVerifyForPay',
    ],
    '数据缓存': [
      'apis/storage/setStorageSync',
      'apis/storage/setStorage',
      'apis/storage/revokeBufferURL',
      'apis/storage/removeStorageSync',
      'apis/storage/removeStorage',
      'apis/storage/getStorageSync',
      'apis/storage/getStorageInfoSync',
      'apis/storage/getStorageInfo',
      'apis/storage/getStorage',
      'apis/storage/createBufferURL',
      'apis/storage/clearStorageSync',
      'apis/storage/clearStorage',
      {
        'label': '周期性更新',
        'type': 'category',
        'items': [
          'apis/storage/background-fetch/setBackgroundFetchToken',
          'apis/storage/background-fetch/onBackgroundFetchData',
          'apis/storage/background-fetch/getBackgroundFetchToken',
          'apis/storage/background-fetch/getBackgroundFetchData',
        ]
      },
      {
        'label': '缓存管理器',
        'type': 'category',
        'items': [
          'apis/storage/cache-manager/createCacheManager',
          'apis/storage/cache-manager/CacheManager',
        ]
      }
    ],
    '数据分析': [
      'apis/data-analysis/reportMonitor',
      'apis/data-analysis/reportEvent',
      'apis/data-analysis/reportAnalytics',
      'apis/data-analysis/getExptInfoSync'
    ],
    '画布': [
      'apis/canvas/createOffscreenCanvas',
      'apis/canvas/createCanvasContext',
      'apis/canvas/canvasToTempFilePath',
      'apis/canvas/canvasPutImageData',
      'apis/canvas/canvasGetImageData',
      'apis/canvas/Canvas',
      'apis/canvas/CanvasContext',
      'apis/canvas/CanvasGradient',
      'apis/canvas/Color',
      'apis/canvas/Image',
      'apis/canvas/ImageData',
      'apis/canvas/OffscreenCanvas',
      'apis/canvas/Path2D',
      'apis/canvas/RenderingContext',
    ],
    '媒体': [
      {
        'label': '地图',
        'type': 'category',
        'items': [
          'apis/media/map/createMapContext',
          'apis/media/map/MapContext'
        ]
      },
      {
        'label': '图片',
        'type': 'category',
        'items': [
          'apis/media/image/saveImageToPhotosAlbum',
          'apis/media/image/previewMedia',
          'apis/media/image/previewImage',
          'apis/media/image/getImageInfo',
          'apis/media/image/editImage',
          'apis/media/image/compressImage',
          'apis/media/image/chooseMessageFile',
          'apis/media/image/chooseImage',
          'apis/media/image/cropImage',
        ]
      },
      {
        'label': '视频',
        'type': 'category',
        'items': [
          'apis/media/video/saveVideoToPhotosAlbum',
          'apis/media/video/openVideoEditor',
          'apis/media/video/getVideoInfo',
          'apis/media/video/createVideoContext',
          'apis/media/video/compressVideo',
          'apis/media/video/chooseVideo',
          'apis/media/video/chooseMedia',
          'apis/media/video/VideoContext',
        ]
      },
      {
        'label': '音频',
        'type': 'category',
        'items': [
          'apis/media/audio/stopVoice',
          'apis/media/audio/setInnerAudioOption',
          'apis/media/audio/playVoice',
          'apis/media/audio/pauseVoice',
          'apis/media/audio/getAvailableAudioSources',
          'apis/media/audio/createWebAudioContext',
          'apis/media/audio/createMediaAudioPlayer',
          'apis/media/audio/createInnerAudioContext',
          'apis/media/audio/createAudioContext',
          'apis/media/audio/AudioBuffer',
          'apis/media/audio/AudioContext',
          'apis/media/audio/InnerAudioContext',
          'apis/media/audio/MediaAudioPlayer',
          'apis/media/audio/WebAudioContext',
          'apis/media/audio/WebAudioContextNode',
        ]
      },
      {
        'label': '背景音频',
        'type': 'category',
        'items': [
          'apis/media/background-audio/stopBackgroundAudio',
          'apis/media/background-audio/seekBackgroundAudio',
          'apis/media/background-audio/playBackgroundAudio',
          'apis/media/background-audio/pauseBackgroundAudio',
          'apis/media/background-audio/onBackgroundAudioStop',
          'apis/media/background-audio/onBackgroundAudioPlay',
          'apis/media/background-audio/onBackgroundAudioPause',
          'apis/media/background-audio/getBackgroundAudioPlayerState',
          'apis/media/background-audio/getBackgroundAudioManager',
          'apis/media/background-audio/BackgroundAudioManager',
        ]
      },
      {
        'label': '实时音视频',
        'type': 'category',
        'items': [
          'apis/media/live/createLivePusherContext',
          'apis/media/live/createLivePlayerContext',
          'apis/media/live/LivePlayerContext',
          'apis/media/live/LivePusherContext',
        ]
      },
      {
        'label': '录音',
        'type': 'category',
        'items': [
          'apis/media/recorder/stopRecord',
          'apis/media/recorder/startRecord',
          'apis/media/recorder/getRecorderManager',
          'apis/media/recorder/RecorderManager',
        ]
      },
      {
        'label': '相机',
        'type': 'category',
        'items': [
          'apis/media/camera/createCameraContext',
          'apis/media/camera/CameraContext',
          'apis/media/camera/CameraFrameListener',
        ]
      },
      {
        'label': '富文本',
        'type': 'category',
        'items': [
          'apis/media/editor/EditorContext',
        ]
      },
      {
        'label': '音视频合成',
        'type': 'category',
        'items': [
          'apis/media/video-processing/createMediaContainer',
          'apis/media/video-processing/MediaContainer',
          'apis/media/video-processing/MediaTrack',
        ]
      },
      {
        'label': '实时语音',
        'type': 'category',
        'items': [
          'apis/media/voip/updateVoIPChatMuteConfig',
          'apis/media/voip/subscribeVoIPVideoMembers',
          'apis/media/voip/setEnable1v1Chat',
          'apis/media/voip/onVoIPVideoMembersChanged',
          'apis/media/voip/onVoIPChatStateChanged',
          'apis/media/voip/onVoIPChatSpeakersChanged',
          'apis/media/voip/onVoIPChatMembersChanged',
          'apis/media/voip/onVoIPChatInterrupted',
          'apis/media/voip/offVoIPVideoMembersChanged',
          'apis/media/voip/offVoIPChatStateChanged',
          'apis/media/voip/offVoIPChatSpeakersChanged',
          'apis/media/voip/offVoIPChatMembersChanged',
          'apis/media/voip/offVoIPChatInterrupted',
          'apis/media/voip/joinVoIPChat',
          'apis/media/voip/join1v1Chat',
          'apis/media/voip/exitVoIPChat',
        ]
      },
      {
        'label': '画面录制器',
        'type': 'category',
        'items': [
          'apis/media/media-recorder/createMediaRecorder',
          'apis/media/media-recorder/MediaRecorder',
        ]
      },
      {
        'label': '视频解码器',
        'type': 'category',
        'items': [
          'apis/media/video-decoder/createVideoDecoder',
          'apis/media/video-decoder/VideoDecoder',
        ]
      },
    ],
    '位置': [
      'apis/location/stopLocationUpdate',
      'apis/location/startLocationUpdateBackground',
      'apis/location/startLocationUpdate',
      'apis/location/openLocation',
      'apis/location/onLocationChangeError',
      'apis/location/onLocationChange',
      'apis/location/offLocationChangeError',
      'apis/location/offLocationChange',
      'apis/location/getLocation',
      'apis/location/getFuzzyLocation',
      'apis/location/choosePoi',
      'apis/location/chooseLocation',
    ],
    '文件': [
      'apis/files/saveFileToDisk',
      'apis/files/saveFile',
      'apis/files/removeSavedFile',
      'apis/files/openDocument',
      'apis/files/getSavedFileList',
      'apis/files/getSavedFileInfo',
      'apis/files/getFileSystemManager',
      'apis/files/getFileInfo',
      'apis/files/FileSystemManager',
      'apis/files/ReadResult',
      'apis/files/Stats',
      'apis/files/WriteResult',
    ],
    '开放接口': [
      {
        'label': '登录',
        'type': 'category',
        'items': [
          'apis/open-api/login/pluginLogin',
          'apis/open-api/login/login',
          'apis/open-api/login/checkSession'
        ]
      },
      {
        'label': '账户信息',
        'type': 'category',
        'items': [
          'apis/open-api/account/getAccountInfoSync'
        ]
      },
      {
        'label': '用户信息',
        'type': 'category',
        'items': [
          'apis/open-api/user-info/getUserProfile',
          'apis/open-api/user-info/getUserInfo',
          'apis/open-api/user-info/UserInfo'
        ]
      },
      {
        'label': '授权',
        'type': 'category',
        'items': [
          'apis/open-api/authorize/authorizeForMiniProgram',
          'apis/open-api/authorize/authorize'
        ]
      },
      {
        'label': '设置',
        'type': 'category',
        'items': [
          'apis/open-api/settings/openSetting',
          'apis/open-api/settings/getSetting',
          'apis/open-api/settings/AuthSetting',
          'apis/open-api/settings/SubscriptionsSetting',
        ]
      },
      {
        'label': '收货地址',
        'type': 'category',
        'items': [
          'apis/open-api/address/chooseAddress'
        ]
      },
      {
        'label': '卡券',
        'type': 'category',
        'items': [
          'apis/open-api/card/openCard',
          'apis/open-api/card/addCard'
        ]
      },
      {
        'label': '发票',
        'type': 'category',
        'items': [
          'apis/open-api/invoice/chooseInvoiceTitle',
          'apis/open-api/invoice/chooseInvoice'
        ]
      },
      {
        'label': '生物认证',
        'type': 'category',
        'items': [
          'apis/open-api/soter/startSoterAuthentication',
          'apis/open-api/soter/checkIsSupportSoterAuthentication',
          'apis/open-api/soter/checkIsSoterEnrolledInDevice',
        ]
      },
      {
        'label': '微信运动',
        'type': 'category',
        'items': [
          'apis/open-api/werun/shareToWeRun',
          'apis/open-api/werun/getWeRunData',
        ]
      },
      {
        'label': '订阅消息',
        'type': 'category',
        'items': [
          'apis/open-api/subscribe-message/requestSubscribeMessage',
          'apis/open-api/subscribe-message/requestSubscribeDeviceMessage',
        ]
      },
      {
        'label': '微信红包',
        'type': 'category',
        'items': [
          'apis/open-api/redpackage/showRedPackage',
        ]
      },
      {
        'label': '收藏',
        'type': 'category',
        'items': [
          'apis/open-api/favorites/addVideoToFavorites',
          'apis/open-api/favorites/addFileToFavorites',
        ]
      },
      {
        'label': '我的小程序',
        'type': 'category',
        'items': [
          'apis/open-api/my-miniprogram/checkIsAddedToMyMiniProgram',
        ]
      },
      {
        'label': '车牌',
        'type': 'category',
        'items': [
          'apis/open-api/license-plate/chooseLicensePlate',
        ]
      },
      {
        'label': '视频号',
        'type': 'category',
        'items': [
          'apis/open-api/channels/reserveChannelsLive',
          'apis/open-api/channels/openChannelsUserProfile',
          'apis/open-api/channels/openChannelsLive',
          'apis/open-api/channels/openChannelsEvent',
          'apis/open-api/channels/openChannelsActivity',
          'apis/open-api/channels/getChannelsShareKey',
          'apis/open-api/channels/getChannelsLiveNoticeInfo',
          'apis/open-api/channels/getChannelsLiveInfo',
        ]
      },
      {
        'label': '音视频通话',
        'type': 'category',
        'items': [
          'apis/open-api/device-voip/requestDeviceVoIP',
          'apis/open-api/device-voip/getDeviceVoIPList',
        ]
      },
      {
        'label': '微信群',
        'type': 'category',
        'items': [
          'apis/open-api/group/getGroupEnterInfo',
        ]
      },
      {
        'label': '微信客服',
        'type': 'category',
        'items': [
          'apis/open-api/customer-service/openCustomerServiceChat'
        ]
      },
    ],
    '设备': [
      {
        'label': '蓝牙-通用',
        'type': 'category',
        'items': [
          'apis/device/bluetooth/stopBluetoothDevicesDiscovery',
          'apis/device/bluetooth/startBluetoothDevicesDiscovery',
          'apis/device/bluetooth/openBluetoothAdapter',
          'apis/device/bluetooth/onBluetoothDeviceFound',
          'apis/device/bluetooth/onBluetoothAdapterStateChange',
          'apis/device/bluetooth/offBluetoothDeviceFound',
          'apis/device/bluetooth/offBluetoothAdapterStateChange',
          'apis/device/bluetooth/makeBluetoothPair',
          'apis/device/bluetooth/isBluetoothDevicePaired',
          'apis/device/bluetooth/getConnectedBluetoothDevices',
          'apis/device/bluetooth/getBluetoothDevices',
          'apis/device/bluetooth/getBluetoothAdapterState',
          'apis/device/bluetooth/closeBluetoothAdapter',
        ]
      },
      {
        'label': '蓝牙-低功耗中心设备',
        'type': 'category',
        'items': [
          'apis/device/bluetooth-ble/writeBLECharacteristicValue',
          'apis/device/bluetooth-ble/setBLEMTU',
          'apis/device/bluetooth-ble/readBLECharacteristicValue',
          'apis/device/bluetooth-ble/onBLEMTUChange',
          'apis/device/bluetooth-ble/onBLEConnectionStateChange',
          'apis/device/bluetooth-ble/onBLECharacteristicValueChange',
          'apis/device/bluetooth-ble/offBLEMTUChange',
          'apis/device/bluetooth-ble/offBLEConnectionStateChange',
          'apis/device/bluetooth-ble/offBLECharacteristicValueChange',
          'apis/device/bluetooth-ble/notifyBLECharacteristicValueChange',
          'apis/device/bluetooth-ble/getBLEMTU',
          'apis/device/bluetooth-ble/getBLEDeviceServices',
          'apis/device/bluetooth-ble/getBLEDeviceRSSI',
          'apis/device/bluetooth-ble/getBLEDeviceCharacteristics',
          'apis/device/bluetooth-ble/createBLEConnection',
          'apis/device/bluetooth-ble/closeBLEConnection',
        ]
      },
      {
        'label': '蓝牙-低功耗外围设备',
        'type': 'category',
        'items': [
          'apis/device/bluetooth-peripheral/onBLEPeripheralConnectionStateChanged',
          'apis/device/bluetooth-peripheral/offBLEPeripheralConnectionStateChanged',
          'apis/device/bluetooth-peripheral/createBLEPeripheralServer',
          'apis/device/bluetooth-peripheral/BLEPeripheralServer',
        ]
      },
      {
        'label': '蓝牙-信标(Beacon)',
        'type': 'category',
        'items': [
          'apis/device/iBeacon/stopBeaconDiscovery',
          'apis/device/iBeacon/startBeaconDiscovery',
          'apis/device/iBeacon/onBeaconUpdate',
          'apis/device/iBeacon/onBeaconServiceChange',
          'apis/device/iBeacon/offBeaconUpdate',
          'apis/device/iBeacon/offBeaconServiceChange',
          'apis/device/iBeacon/getBeacons',
          'apis/device/iBeacon/IBeaconInfo',
        ]
      },
      {
        'label': 'NFC',
        'type': 'category',
        'items': [
          'apis/device/nfc/stopHCE',
          'apis/device/nfc/startHCE',
          'apis/device/nfc/sendHCEMessage',
          'apis/device/nfc/onHCEMessage',
          'apis/device/nfc/offHCEMessage',
          'apis/device/nfc/getNFCAdapter',
          'apis/device/nfc/getHCEState',
          'apis/device/nfc/IsoDep',
          'apis/device/nfc/MifareClassic',
          'apis/device/nfc/MifareUltralight',
          'apis/device/nfc/Ndef',
          'apis/device/nfc/NfcA',
          'apis/device/nfc/NFCAdapter',
          'apis/device/nfc/NfcB',
          'apis/device/nfc/NfcF',
          'apis/device/nfc/NfcV',
        ]
      },
      {
        'label': 'Wi-Fi',
        'type': 'category',
        'items': [
          'apis/device/wifi/stopWifi',
          'apis/device/wifi/startWifi',
          'apis/device/wifi/setWifiList',
          'apis/device/wifi/onWifiConnectedWithPartialInfo',
          'apis/device/wifi/onWifiConnected',
          'apis/device/wifi/onGetWifiList',
          'apis/device/wifi/offWifiConnectedWithPartialInfo',
          'apis/device/wifi/offWifiConnected',
          'apis/device/wifi/offGetWifiList',
          'apis/device/wifi/getWifiList',
          'apis/device/wifi/getConnectedWifi',
          'apis/device/wifi/connectWifi',
          'apis/device/wifi/WifiInfo',
        ]
      },
      {
        'label': '日历',
        'type': 'category',
        'items': [
          'apis/device/calendar/addPhoneRepeatCalendar',
          'apis/device/calendar/addPhoneCalendar',
        ]
      },
      {
        'label': '联系人',
        'type': 'category',
        'items': [
          'apis/device/contact/chooseContact',
          'apis/device/contact/addPhoneContact',
        ]
      },
      {
        'label': '无障碍',
        'type': 'category',
        'items': [
          'apis/device/accessibility/checkIsOpenAccessibility',
        ]
      },
      {
        'label': '电量',
        'type': 'category',
        'items': [
          'apis/device/battery/getBatteryInfoSync',
          'apis/device/battery/getBatteryInfo',
        ]
      },
      {
        'label': '剪贴板',
        'type': 'category',
        'items': [
          'apis/device/clipboard/setClipboardData',
          'apis/device/clipboard/getClipboardData',
        ]
      },
      {
        'label': '网络',
        'type': 'category',
        'items': [
          'apis/device/network/onNetworkWeakChange',
          'apis/device/network/onNetworkStatusChange',
          'apis/device/network/offNetworkWeakChange',
          'apis/device/network/offNetworkStatusChange',
          'apis/device/network/getNetworkType',
          'apis/device/network/getLocalIPAddress',
        ]
      },
      {
        'label': '屏幕',
        'type': 'category',
        'items': [
          'apis/device/screen/setVisualEffectOnCapture',
          'apis/device/screen/setScreenBrightness',
          'apis/device/screen/setKeepScreenOn',
          'apis/device/screen/onUserCaptureScreen',
          'apis/device/screen/onScreenRecordingStateChanged',
          'apis/device/screen/offUserCaptureScreen',
          'apis/device/screen/offScreenRecordingStateChanged',
          'apis/device/screen/getScreenRecordingState',
          'apis/device/screen/getScreenBrightness',
        ]
      },
      {
        'label': '键盘',
        'type': 'category',
        'items': [
          'apis/device/keyboard/onKeyboardHeightChange',
          'apis/device/keyboard/offKeyboardHeightChange',
          'apis/device/keyboard/hideKeyboard',
          'apis/device/keyboard/getSelectedTextRange',
        ]
      },
      {
        'label': '电话',
        'type': 'category',
        'items': [
          'apis/device/phone/makePhoneCall',
        ]
      },
      {
        'label': '加速计',
        'type': 'category',
        'items': [
          'apis/device/accelerometer/stopAccelerometer',
          'apis/device/accelerometer/startAccelerometer',
          'apis/device/accelerometer/onAccelerometerChange',
          'apis/device/accelerometer/offAccelerometerChange',
        ]
      },
      {
        'label': '罗盘',
        'type': 'category',
        'items': [
          'apis/device/compass/stopCompass',
          'apis/device/compass/startCompass',
          'apis/device/compass/onCompassChange',
          'apis/device/compass/offCompassChange',
        ]
      },
      {
        'label': '设备方向',
        'type': 'category',
        'items': [
          'apis/device/motion/stopDeviceMotionListening',
          'apis/device/motion/startDeviceMotionListening',
          'apis/device/motion/onDeviceMotionChange',
          'apis/device/motion/offDeviceMotionChange',
        ]
      },
      {
        'label': '陀螺仪',
        'type': 'category',
        'items': [
          'apis/device/gyroscope/stopGyroscope',
          'apis/device/gyroscope/startGyroscope',
          'apis/device/gyroscope/onGyroscopeChange',
          'apis/device/gyroscope/offGyroscopeChange',
        ]
      },
      {
        'label': '内存',
        'type': 'category',
        'items': [
          'apis/device/memory/onMemoryWarning',
          'apis/device/memory/offMemoryWarning',
        ]
      },
      {
        'label': '扫码',
        'type': 'category',
        'items': [
          'apis/device/scan/scanCode',
        ]
      },
      {
        'label': '短信',
        'type': 'category',
        'items': [
          'apis/device/sms/sendSms',
        ]
      },
      {
        'label': '震动',
        'type': 'category',
        'items': [
          'apis/device/vibrate/vibrateShort',
          'apis/device/vibrate/vibrateLong',
        ]
      }
    ],
    'AI': [
      {
        'label': 'AI 推理',
        'type': 'category',
        'items': [
          'apis/ai/inference/getInferenceEnvInfo',
          'apis/ai/inference/createInferenceSession',
          'apis/ai/inference/InferenceSession',
        ]
      },
      {
        'label': '视觉算法',
        'type': 'category',
        'items': [
          'apis/ai/visionkit/isVKSupport',
          'apis/ai/visionkit/createVKSession',
          'apis/ai/visionkit/VKAnchor',
          'apis/ai/visionkit/VKCamera',
          'apis/ai/visionkit/VKFrame',
          'apis/ai/visionkit/VKSession',
        ]
      }, {
        'label': '人脸检测',
        'type': 'category',
        'items': [
          'apis/ai/face/stopFaceDetect',
          'apis/ai/face/initFaceDetect',
          'apis/ai/face/faceDetect',
          'apis/open-api/facial/checkIsSupportFacialRecognition',
          'apis/open-api/facial/startFacialRecognitionVerify',
          'apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo',
        ]
      }
    ],
    'Worker': [
      'apis/worker/createWorker',
      'apis/worker/Worker'
    ],
    'WXML': [
      'apis/wxml/createSelectorQuery',
      'apis/wxml/createIntersectionObserver',
      'apis/wxml/createMediaQueryObserver',
      'apis/wxml/IntersectionObserver',
      'apis/wxml/MediaQueryObserver',
      'apis/wxml/NodesRef',
      'apis/wxml/SelectorQuery'
    ],
    '第三方平台': [
      'apis/ext/getExtConfigSync',
      'apis/ext/getExtConfig'
    ],
    '广告': [
      'apis/ad/createRewardedVideoAd',
      'apis/ad/createInterstitialAd',
      'apis/ad/InterstitialAd',
      'apis/ad/RewardedVideoAd'
    ],
    '云开发': [
      'apis/cloud/cloud',
      'apis/cloud/DB'
    ],
    'Alipay': [
      'apis/alipay/getOpenUserInfo'
    ],
    'QQ': [
      'apis/qq/openQzonePublish'
    ],
    'Swan': [
      'apis/swan/setPageInfo'
    ],
  }
}
