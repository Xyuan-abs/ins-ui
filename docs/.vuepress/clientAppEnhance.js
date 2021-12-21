import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

import  InsForm from '@ins-ui/ins-form'
// console.log('%c [ InsForm ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', InsForm)
// import InsForm from '../../packages/ins-form/lib/ins-form.es.js'
// import '../../packages/ins-form/lib/css/index.css'

// import InsForm from '../../packages/ins-form/dist/ins-form.es.js'
// import '../../packages/ins-form/dist/style.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus,{
    locale: zhCn,
  })
  app.use(InsForm)
  // ...
})