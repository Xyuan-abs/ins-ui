import { defineClientAppEnhance } from '@vuepress/client'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

import  * as ElementPlusIcon from '@element-plus/icons-vue'

import  InsForm from '@ins-ui/ins-form'
import  '@ins-ui/ins-form/lib/style.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus,{
    locale: zhCn,
  })

  Object.keys(ElementPlusIcon).forEach(key=>{
    app.component(key, ElementPlusIcon[key])
  })
  
  app.use(InsForm)
  // ...
})