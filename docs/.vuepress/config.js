
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
      '/components':[
        {
          text: '组件',
          children: [
            {
              text: 'InsForm 动态表单',
              link:'/components/form/guid',
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
                {
                  text: 'Upload',
                  link:'/components/form/upload',
                },
                {
                  text: 'Rate',
                  link:'/components/form/rate',
                },
              ]
            },
            {
              text: 'InsTable 动态表格',
              link:'/components/table/guid',
              children: [
                {
                  text: '快速开始',
                  link:'/components/table/guid',
                },
                {
                  text: 'Table',
                  link:'/components/table/table',
                },
              ]
            },
            {
              text: 'InsPager 分页',
              link:'/components/pager/guid',
              children: [
                {
                  text: '快速开始',
                  link:'/components/pager/guid',
                },
                {
                  text: 'Pager',
                  link:'/components/pager/pager',
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
      cssPreprocessor: 'sass',
      scriptImports: ["import * as ElementPlus from 'element-plus'","import * as ElementPlusIcon from '@element-plus/icons-vue'"],
      scriptReplaces: [
        { searchValue: /import ({.*}) from 'element-plus'/g,
          replaceValue: (s, s1) => `const ${s1} = ElementPlus`
        },
        { searchValue: /import ({.*}) from '@element-plus\/icons-vue'/g,
          replaceValue: (s, s1) => `const ${s1} = ElementPlusIcon`
        }
      ]
    }]
  ],
}
