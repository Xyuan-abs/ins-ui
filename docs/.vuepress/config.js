
module.exports = {
  title: 'ins-ui', // 设置网站标题
  description: '二次封装的 UI 组件集合', //描述
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    navbar: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/guide/' },
      { text: 'github',link: 'https://github.com/Xyuan-abs/ins-ui'}
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/guide/': [
        {
          text: '组件',
          children: [
            {
              text: 'Form 动态表单',
              link:'/guide/form',
            }
          ]
        },
      ],
    },
  },
  plugins: [
    ['vuepress-plugin-demoblock-plus', {
      cssPreprocessor: 'sass'
    }]
  ]
}
