
module.exports = {
  title: 'ins-ui', // 设置网站标题
  description: 'Just for fun', //描述
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    navbar: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/guide/' },
      { text: '知识库', link: '/knowledge/' },
      { text: 'github',        // 这里是下拉列表展现形式。
        children: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
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
      '/knowledge/': [
        {
          text: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          text: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          text: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          text: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    },
  },
  plugins: [
    ['vuepress-plugin-demoblock-plus', {
      cssPreprocessor: 'sass'
    }]
  ]
}
