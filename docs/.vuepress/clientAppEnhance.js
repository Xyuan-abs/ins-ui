import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

import form from '../../packages/ins-form/lib/index.js'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus,{
    // locale: zhCn,
  })
  app.use(form)
  // ...
})