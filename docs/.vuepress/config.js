module.exports = {
  lang: 'zh-CN',
  title: '狐狸',
  description: '热爱生活',
  head: [
    ['link', { rel: 'icon', href: '/images/fox.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    record: '蜀ICP备2021029946号-1',
    codeTheme: 'funky', 
    logo: '/images/logo.jpg',
    authorAvatar: '/images/logo.jpg',
    noFoundPageByTencent: false,
    /*侧边栏*/
    subSidebar: 'auto',
    /*导航栏配置*/
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '关于我', link: '/aboutMe', icon: 'reco-account' },
    ],
    /*博客配置*/
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '博客' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/oxkser' }
      ]
    },
    /*评论配置*/
    valineConfig: {
      showComment: true, //是否展示评论
      appId: 'VpFCynKcryD90yJ8Yiyssw09-gzGzoHsz', // your appId
      appKey: 'cCqh7vt6A0JyAUPwm3lCVz9E' // your appKey
    },
    /*友链配置*/
    friendLink: [
      {
        title: 'github',
        desc: '这是我的github',
        email: 'wangjie6215@163.com',
        logo: "/images/github/github-logo.png",
        link: 'https://www.github.com/oxkser'
      },
      // ...
    ]
    /*密钥 */
    // keyPage: {
    //   keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
  },
}
