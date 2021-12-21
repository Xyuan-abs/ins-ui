import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

import  InsForm from '@ins-ui/ins-form'
import  '@ins-ui/ins-form/lib/style.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus,{
    locale: zhCn,
  })
  app.use(InsForm)
  // ...
})