module.exports = {
  lang: 'zh-CN',
  title: '狐狸',
  description: '这是狐狸的博客',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.ico' }],
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
    logo: '/images/logo.jpg',
    /*评论配置*/
    valineConfig: {
      showComment: false, //是否展示评论
      appId: 'VpFCynKcryD90yJ8Yiyssw09-gzGzoHsz', // your appId
      appKey: 'cCqh7vt6A0JyAUPwm3lCVz9E' // your appKey
    },
    /*密钥 */
    // keyPage: {
    //   keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
    /*博客配置*/
    blogConfig: {
      nav: [
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'Tags', link: '/tags/', icon: 'reco-tag' }
      ],
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/oxkser' }
      ]
    }
  }
}
