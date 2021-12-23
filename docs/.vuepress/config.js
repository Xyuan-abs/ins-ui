
module.exports = {
  title: 'ins-ui', // 设置网站标题
  description: '二次封装的 UI 组件集合', //描述
  port: 2333, //端口
  base:'/ins-ui/',
  themeConfig: { //主题配置
    // 添加导航栏
    navbar: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/components/form/guid' },
      { text: 'github',link: 'https://github.com/Xyuan-abs/ins-ui'}
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/guide/': [
        {
          text: '组件',
          children: [
            {
              text: 'InsForm 动态表单',
              link:'/guide/form',
            }
          ]
        },
      ],
      '/components':[
        {
          text: '组件',
          children: [
            {
              text: 'InsForm 动态表单',
              link:'/components/form/input',
              children: [
                {
                  text: '快速开始',
                  link:'/components/form/guid',
                },
                {
                  text: 'Form',
                  link:'/components/form/form',
                },
                {
                  text: 'Input',
                  link:'/components/form/input',
                },
                {
                  text: 'InputNumber',
                  link:'/components/form/input-number',
                },
                {
                  text: 'Select',
                  link:'/components/form/select',
                },
                {
                  text: 'Cascader',
                  link:'/components/form/cascader',
                },
                {
                  text: 'DatePicker',
                  link:'/components/form/date-picker',
                },
                {
                  text: 'Checkbox',
                  link:'/components/form/checkbox',
                },
                {
                  text: 'Radio',
                  link:'/components/form/radio',
                },
              ]
            }
          ]
        },
      ]
    },
  },
  plugins: [
    ['vuepress-plugin-demoblock-plus', {
      cssPreprocessor: 'sass'
    }]
  ]
}
