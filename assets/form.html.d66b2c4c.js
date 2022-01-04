var D=Object.defineProperty;var E=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(c,t,r)=>t in c?D(c,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[t]=r,F=(c,t)=>{for(var r in t||(t={}))A.call(t,r)&&_(c,r,t[r]);if(E)for(var r of E(t))B.call(t,r)&&_(c,r,t[r]);return c};import{_ as L,r as w,o as I,c as j,a as o,b as a,w as i,F as P,d as s,e as V,V as g}from"./app.af016c97.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,openBlock:t,createBlock:r}=g;function m(e,x){const l=c("ins-form");return t(),r(l,{dynamicForm:e.dynamicForm,onSave:e.submit},null,8,["dynamicForm","onSave"])}const{reactive:u}=g;return F({render:m},{setup(e,{expose:x}){x();let l=u({form:[{name:"input",label:"input",value:null,element:"input",width:500},{name:"select",label:"select",value:null,element:"select",options:[{label:"optionsLabel",value:"optionsValue"}],width:500},{name:"date",label:"date",value:null,element:"datePicker",width:500},{name:"input-number",label:"inputNumber",value:null,element:"inputNumber",width:"200px"},{name:"checkbox",label:"checkbox",value:[],element:"checkbox",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}]},{name:"radio",label:"radio",value:null,element:"radio",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}]},{name:"cascader",label:"cascader",value:null,options:[{label:"label1",value:"value1",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]},{label:"label2",value:"value2"}],element:"cascader",width:500},{name:"upload",label:"upload",value:[],element:"upload",elementType:"fileList",attr:{action:"https://jsonplaceholder.typicode.com/posts/",fileList:[],limit:2,"before-upload":v},formatterValue:k,tip:"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",width:"500px"},{name:"rate",label:"rate",value:null,element:"rate",attr:{"show-score":!0,"text-color":"#ff9900","score-template":"{value}\u5206"}}]});function v(h){const y=h.type==="image/jpeg",d=h.type==="image/png",f=h.size/1024/1024<.5;return!y&&!d?(ElMessage.error("\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!"),!1):f?!0:(ElMessage.error("\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!"),!1)}function k(h){let{response:y}=h;return y.id}function n(h){console.log(h)}const p={dynamicForm:l,handleBeforeUpload:v,formatterValue:k,submit:n,reactive:u};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}})}(),"render-demo-1":function(){const{resolveComponent:c,openBlock:t,createBlock:r}=g;function m(e,x){const l=c("ins-form");return t(),r(l,{dynamicForm:e.dynamicForm,cols:e.cols,onSave:e.submit},null,8,["dynamicForm","cols","onSave"])}const{reactive:u}=g;return F({render:m},{setup(e,{expose:x}){x();let l=3,v=u({form:[{name:"input",label:"input",value:null,element:"input",col:1},{name:"select",label:"select",value:null,element:"select",options:[{label:"optionsLabel",value:"optionsValue"}],col:1},{name:"date",label:"date",value:null,element:"datePicker",col:1},{name:"input-number",label:"inputNumber",value:null,element:"inputNumber",col:1},{name:"checkbox",label:"checkbox",value:[],element:"checkbox",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],col:1},{name:"radio",label:"radio",value:null,element:"radio",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],col:1},{name:"cascader",label:"cascader",value:null,options:[{label:"label1",value:"value1",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]},{label:"label2",value:"value2"}],element:"cascader",col:1},{name:"rate",label:"rate",value:null,element:"rate",attr:{"show-score":!0,"text-color":"#ff9900","score-template":"{value}\u5206"},col:1},{name:"uploadImgList",label:"uploadImgList",value:[],element:"upload",elementType:"imgList",attr:{action:"https://jsonplaceholder.typicode.com/posts/",fileList:[],limit:3,"before-upload":n},formatterValue:k,tip:"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",col:3},{name:"uploadDragImg",label:"uploadDragImg",value:null,element:"upload",elementType:"dragImg",attr:{action:"https://jsonplaceholder.typicode.com/posts/",fileList:[],"before-upload":n},formatterValue:k,tip:"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",col:3}]});function k(y){let{url:d,response:f}=y;return f.url?f.url:d}function n(y){const d=y.type==="image/jpeg",f=y.type==="image/png",C=y.size/1024/1024<.5;return!d&&!f?(ElMessage.error("\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!"),!1):C?!0:(ElMessage.error("\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!"),!1)}function p(y){console.log(y)}const h={cols:l,dynamicForm:v,formatterValue:k,handleBeforeUpload:n,submit:p,reactive:u};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}})}(),"render-demo-2":function(){const{resolveComponent:c,openBlock:t,createBlock:r}=g;function m(e,x){const l=c("ins-form");return t(),r(l,{dynamicForm:e.dynamicForm,"label-width":"120px","is-text":!0,cols:e.cols,"has-submit":!1},null,8,["dynamicForm","cols"])}const{reactive:u}=g;return F({render:m},{setup(e,{expose:x}){x();let l=3,v=u({form:[{name:"input",label:"input",value:"\u8FD9\u662F\u4E00\u4E2Ainput",element:"input",col:1},{name:"select",label:"select",value:"optionsValue",element:"select",options:[{label:"optionsLabel",value:"optionsValue"}],col:1},{name:"date",label:"date",value:"2021-11-11",element:"datePicker",col:1},{name:"input-number",label:"inputNumber",value:100,element:"inputNumber",col:1},{name:"checkbox",label:"checkbox",value:["value1","value2","value3"],element:"checkbox",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],col:1},{name:"radio",label:"radio",value:"value1",element:"radio",options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],col:1},{name:"cascader",label:"cascader",value:[["value1","axure"],["value1","sketch"]],options:[{label:"label1",value:"value1",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863"}]},{label:"label2",value:"value2"}],element:"cascader",attr:{props:{multiple:!0}},col:1},{name:"uploadFileList",label:"uploadFileList",value:[],element:"upload",elementType:"fileList",attr:{fileList:[]},col:2,width:"600px"},{name:"uploadDragImg",label:"uploadDragImg",value:[],element:"upload",elementType:"dragImg",attr:{fileList:[]},col:3},{name:"uploadImgList",label:"uploadImgList",value:[],element:"upload",elementType:"imgList",attr:{fileList:[]},col:3},{name:"rate",label:"rate",value:4.3,element:"rate",col:1}]});setTimeout(()=>{let n="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",p=v.form.find(d=>d.element==="upload"&&d.elementType==="fileList");p.attr.fileList=[{name:"foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood.jpeg",url:n},{name:"food2.jpeg",url:"url"},{name:"food3.jpeg",url:n}];let h=v.form.find(d=>d.element==="upload"&&d.elementType==="imgList");h.attr.fileList=[{name:"food.jpeg",url:n},{name:"food2.jpeg",url:n},{name:"food3.jpeg",url:n}];let y=v.form.find(d=>d.element==="upload"&&d.elementType==="dragImg");y.attr.fileList=[{name:"food.jpeg",url:n}]},1e3);const k={cols:l,dynamicForm:v,reactive:u};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}})}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:t,withCtx:r,openBlock:m,createBlock:u}=g;function b(l,v){const k=c("el-input"),n=c("ins-form");return m(),u(n,{dynamicForm:l.dynamicForm,cols:l.cols,onSave:l.submit},{slot:r(({formItem:p,index:h})=>[t(k,{modelValue:p.value,"onUpdate:modelValue":y=>p.value=y,placeholder:"\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879"},null,8,["modelValue","onUpdate:modelValue"])]),slotRules:r(({formItem:p,index:h})=>[t(k,{modelValue:p.value,"onUpdate:modelValue":y=>p.value=y,placeholder:"\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["dynamicForm","cols","onSave"])}const{reactive:e}=g;return F({render:b},{setup(l,{expose:v}){v();let k=e({form:[{name:"slot",label:"slot",value:null,isSlot:!0},{name:"slotRules",label:"slotRules",value:null,isSlot:!0,rules:[{required:!0,trigger:"change"}]}]});function n(h){console.log(h)}const p={dynamicForm:k,submit:n,reactive:e};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}})}(),"render-demo-4":function(){const{resolveComponent:c,openBlock:t,createBlock:r}=g;function m(e,x){const l=c("ins-form");return t(),r(l,{dynamicForm:e.dynamicForm,inline:!0,onSave:e.submit},null,8,["dynamicForm","onSave"])}const{reactive:u}=g;return F({render:m},{setup(e,{expose:x}){x();let l=u({form:[{name:"input",label:"input",value:null,element:"input"},{name:"select",label:"select",value:null,element:"select",options:[{label:"optionsLabel",value:"optionsValue"}]},{name:"date",label:"date",value:null,element:"datePicker",rules:[{require:!0,trigger:"change"}]}]});function v(n){console.log(n)}const k={dynamicForm:l,submit:v,reactive:u};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}})}()}},S=o("h1",{id:"insform-\u52A8\u6001\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#insform-\u52A8\u6001\u8868\u5355","aria-hidden":"true"},"#"),s(" InsForm \u52A8\u6001\u8868\u5355")],-1),N=o("p",null,"\u63D0\u4F9B Input\u3001InputNumber\u3001Select\u3001Cascader\u3001DatePicker\u3001Checkbox\u3001Radio \u7B49\u8868\u5355\u63A7\u4EF6\uFF0C\u5B9E\u73B0\u901A\u8FC7\u7B80\u5355\u914D\u7F6E\u5373\u53EF\u751F\u6210\u52A8\u6001\u8868\u5355",-1),G={class:"table-of-contents"},M=s("\u793A\u4F8B"),J=s("\u57FA\u7840\u8868\u5355"),U=s("\u591A\u5217\u8868\u5355"),R=s("\u7EAF\u6587\u672C"),q=s("\u4F7F\u7528\u63D2\u69FD"),O=s("FormInline"),z=s("formItem \u901A\u7528\u914D\u7F6E"),K=s("InsForm Attributes"),$=s("InsForm Events"),H=s("InsForm Methods"),Q=o("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),W=o("h3",{id:"\u57FA\u7840\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u57FA\u7840\u8868\u5355","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u8868\u5355")],-1),X=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"500"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsLabel'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsValue'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"500"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'datePicker'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"500"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input-number'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'200px'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          children"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'axure'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Axure Components'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'sketch'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Sketch Templates'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'jiaohu'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"500"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'fileList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        action"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'https://jsonplaceholder.typicode.com/posts/'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        limit"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"2"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'before-upload'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," handleBeforeUpload"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      formatterValue"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," formatterValue"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      tip"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'500px'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'show-score'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'text-color'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#ff9900'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'score-template'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'{value}\u5206'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"})")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"handleBeforeUpload"),o("span",{style:{color:"var(--shiki-color-text)"}},"(file) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isJPG"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".type "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'image/jpeg'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isPng"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".type "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'image/png'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isLt500k"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".size "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"/"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1024"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"/"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1024"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"<"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"0.5")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"if"),o("span",{style:{color:"var(--shiki-color-text)"}}," ("),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isJPG "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"&&"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isPng) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-constant)"}},"ElMessage"),o("span",{style:{color:"var(--shiki-token-function)"}},".error"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"if"),o("span",{style:{color:"var(--shiki-color-text)"}}," ("),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isLt500k) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-constant)"}},"ElMessage"),o("span",{style:{color:"var(--shiki-token-function)"}},".error"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"formatterValue"),o("span",{style:{color:"var(--shiki-color-text)"}},"(fileListItem) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," { response } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," fileListItem")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"response"),o("span",{style:{color:"var(--shiki-color-text)"}},".id")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"console"),o("span",{style:{color:"var(--shiki-token-function)"}},".log"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value)")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),Y=o("h3",{id:"\u591A\u5217\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u591A\u5217\u8868\u5355","aria-hidden":"true"},"#"),s(" \u591A\u5217\u8868\u5355")],-1),Z=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," cols "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsLabel'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsValue'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'datePicker'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input-number'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          children"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'axure'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Axure Components'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'sketch'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Sketch Templates'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'jiaohu'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'show-score'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'text-color'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#ff9900'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'score-template'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'{value}\u5206'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadImgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadImgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'imgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        action"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'https://jsonplaceholder.typicode.com/posts/'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        limit"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'before-upload'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," handleBeforeUpload"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      formatterValue"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," formatterValue"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      tip"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadDragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadDragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'dragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        action"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'https://jsonplaceholder.typicode.com/posts/'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'before-upload'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," handleBeforeUpload"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      formatterValue"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," formatterValue"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      tip"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"})")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"formatterValue"),o("span",{style:{color:"var(--shiki-color-text)"}},"(fileListItem) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," { url"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," response } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," fileListItem")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"response"),o("span",{style:{color:"var(--shiki-color-text)"}},".url "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"?"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"response"),o("span",{style:{color:"var(--shiki-color-text)"}},".url "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"handleBeforeUpload"),o("span",{style:{color:"var(--shiki-color-text)"}},"(file) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isJPG"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".type "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'image/jpeg'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isPng"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".type "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'image/png'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"isLt500k"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"file"),o("span",{style:{color:"var(--shiki-color-text)"}},".size "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"/"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1024"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"/"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1024"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"<"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"0.5")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"if"),o("span",{style:{color:"var(--shiki-color-text)"}}," ("),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isJPG "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"&&"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isPng) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-constant)"}},"ElMessage"),o("span",{style:{color:"var(--shiki-token-function)"}},".error"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"if"),o("span",{style:{color:"var(--shiki-color-text)"}}," ("),o("span",{style:{color:"var(--shiki-token-keyword)"}},"!"),o("span",{style:{color:"var(--shiki-color-text)"}},"isLt500k) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-constant)"}},"ElMessage"),o("span",{style:{color:"var(--shiki-token-function)"}},".error"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"console"),o("span",{style:{color:"var(--shiki-token-function)"}},".log"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value)")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"cols"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"cols"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),oo=o("h3",{id:"\u7EAF\u6587\u672C",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7EAF\u6587\u672C","aria-hidden":"true"},"#"),s(" \u7EAF\u6587\u672C")],-1),so=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," cols "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u8FD9\u662F\u4E00\u4E2Ainput'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsValue'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsLabel'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsValue'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'2021-11-11'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'datePicker'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input-number'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"100"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'inputNumber'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'checkbox'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'radio'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value3'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'axure'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'sketch'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          children"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'axure'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Axure Components'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'sketch'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Sketch Templates'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"            { value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'jiaohu'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        { label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'label2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'value2'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'cascader'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        props"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          multiple"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadFileList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadFileList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'fileList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"2"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'600px'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadDragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadDragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'dragImg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadImgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'uploadImgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'imgList'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        fileList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"4.3"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"})")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-function)"}},"setTimeout"),o("span",{style:{color:"var(--shiki-color-text)"}},"(() "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," url "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," fileList "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-function)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"form"),o("span",{style:{color:"var(--shiki-token-function)"}},".find"),o("span",{style:{color:"var(--shiki-color-text)"}},"(")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    (d) "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".element "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"&&"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".elementType "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'fileList'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  )")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"fileList"),o("span",{style:{color:"var(--shiki-color-text)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"attr"),o("span",{style:{color:"var(--shiki-color-text)"}},".fileList "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    { name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food2.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'url'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    { name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food3.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," imgList "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-function)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"form"),o("span",{style:{color:"var(--shiki-token-function)"}},".find"),o("span",{style:{color:"var(--shiki-color-text)"}},"((d) "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".element "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"&&"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".elementType "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'imgList'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"imgList"),o("span",{style:{color:"var(--shiki-color-text)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"attr"),o("span",{style:{color:"var(--shiki-color-text)"}},".fileList "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    { name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    { name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food2.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    { name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food3.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dragImg "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-function)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"form"),o("span",{style:{color:"var(--shiki-token-function)"}},".find"),o("span",{style:{color:"var(--shiki-color-text)"}},"((d) "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".element "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'upload'"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"&&"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"d"),o("span",{style:{color:"var(--shiki-color-text)"}},".elementType "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"==="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'dragImg'"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"dragImg"),o("span",{style:{color:"var(--shiki-color-text)"}},"."),o("span",{style:{color:"var(--shiki-token-constant)"}},"attr"),o("span",{style:{color:"var(--shiki-color-text)"}},".fileList "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," [{ name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'food.jpeg'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," url"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," url }]")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1000"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"label-width"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'120px'"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"is-text"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"cols"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"cols"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"has-submit"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),eo=o("h3",{id:"\u4F7F\u7528\u63D2\u69FD",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u4F7F\u7528\u63D2\u69FD","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u63D2\u69FD")],-1),lo=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'slot'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'slot'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      isSlot"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'slotRules'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'slotRules'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      isSlot"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      rules"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [{ required"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," trigger"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'change'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"})")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"console"),o("span",{style:{color:"var(--shiki-token-function)"}},".log"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value)")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"cols"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"cols"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"#"),o("span",{style:{color:"var(--shiki-token-function)"}},"slot"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"{ formItem"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," index }"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"el-input"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"formItem"),o("span",{style:{color:"var(--shiki-color-text)"}},".value"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"placeholder"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"#"),o("span",{style:{color:"var(--shiki-token-function)"}},"slotRules"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"{ formItem"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," index }"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"el-input"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"formItem"),o("span",{style:{color:"var(--shiki-color-text)"}},".value"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"placeholder"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),to=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"\u4F7F\u7528\u63D2\u69FD\u65F6"),o("ul",null,[o("li",null,"\u63D2\u69FD\u7684 name \u4E3A formItem.name"),o("li",null,"\u8BBE\u7F6E formItem.element \u548C formItem.elementType \u65E0\u6548"),o("li",null,"\u8BBE\u7F6E isText \u65E0\u6548\uFF0C \u9700\u8981\u81EA\u884C\u5B9E\u73B0\u6587\u672C\u683C\u5F0F\u5C55\u793A")])],-1),ro=o("h3",{id:"forminline",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#forminline","aria-hidden":"true"},"#"),s(" FormInline")],-1),no=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'select'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      options"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsLabel'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'optionsValue'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'date'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'datePicker'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      rules"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [{ require"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," trigger"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'change'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"})")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"function"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"console"),o("span",{style:{color:"var(--shiki-token-function)"}},".log"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value)")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"inline"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),ao=V('<div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u884C\u5185\u8868\u5355 \u4E0D\u663E\u793A label</li></ul></div><h2 id="formitem-\u901A\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#formitem-\u901A\u7528\u914D\u7F6E" aria-hidden="true">#</a> formItem \u901A\u7528\u914D\u7F6E</h2><p>\u5176\u4ED6\u5C5E\u6027\u53C2\u8003 \u4E0D\u540C\u7C7B\u578B \u5404\u81EA\u7684 formItem \u914D\u7F6E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>name</td><td>\u5C5E\u6027\u540D</td><td>String</td></tr><tr><td>label</td><td>el-form \u7684 label</td><td>String</td></tr><tr><td>value</td><td>\u5C5E\u6027\u503C</td><td>Any</td></tr><tr><td>element</td><td>\u8868\u5355\u4E00\u7EA7\u7C7B\u578B</td><td>String</td></tr><tr><td>elementType</td><td>\u8868\u5355\u4E8C\u7EA7\u7C7B\u578B\uFF0C\u5177\u4F53\u53C2\u8003\u5BF9\u5E94 \u4E00\u7EA7\u7C7B\u578B \u7684\u914D\u7F6E\u8BF4\u660E</td><td>String</td></tr><tr><td>attr</td><td>\u5BF9\u5E94 element-puls \u7EC4\u4EF6\u7684\u914D\u7F6E</td><td>Object</td></tr><tr><td>isText</td><td>\u662F\u5426\u7EAF\u6587\u672C\u5C55\u793A,\u4E00\u822C\u7528\u4E8E\u6570\u636E\u56DE\u663E</td><td>Boolean</td></tr><tr><td>rules</td><td>\u6821\u9A8C\u89C4\u5219</td><td>Array</td></tr><tr><td>col</td><td>\u914D\u5408 cols\uFF0C\u8868\u793A\u8BE5\u9879\u5360\u51E0\u5217 ,\u8BBE\u7F6E\u7684\u662F max-width \uFF0Cmax-width \u4E3A\u9ED8\u8BA4 100%</td><td>Number</td></tr><tr><td>width</td><td>\u8868\u5355\u9879\u5BBD\u5EA6,\u8BBE\u7F6E\u7684\u662F width\uFF0C\u9ED8\u8BA4 100%</td><td>String,Number</td></tr></tbody></table><h2 id="insform-attributes" tabindex="-1"><a class="header-anchor" href="#insform-attributes" aria-hidden="true">#</a> InsForm Attributes</h2><p>\u5C5E\u6027\u9664\u7EE7\u627F\u81EA el-form \u5C5E\u6027\u5916\uFF0C\u589E\u52A0\u4EE5\u4E0B\u5C5E\u6027</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dynamicForm</td><td>\u52A8\u6001\u8868\u5355\u914D\u7F6E\u5BF9\u8C61</td><td>Object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-width</td><td>label \u5BBD\u5EA6</td><td>String</td><td>\u2014</td><td>100px</td></tr><tr><td>cols</td><td>\u4E00\u884C\u5206\u4E3A\u51E0\u5217\uFF0C\u914D\u5408 formItem.col \u5B9E\u73B0\u8868\u5355\u6805\u683C\u5316</td><td>Number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hasSubmit</td><td>\u662F\u5426\u5C55\u793A\u63D0\u4EA4\u3001\u91CD\u7F6E\u6309\u94AE</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>submitText</td><td>\u63D0\u4EA4\u6309\u94AE\u6587\u672C</td><td>String</td><td>\u2014</td><td>\u63D0\u4EA4</td></tr><tr><td>isText</td><td>\u8868\u5355\u662F\u5426\u5168\u90E8\u5C55\u793A\u6210\u7EAF\u6587\u672C</td><td>Boolean</td><td>true/false</td><td>false</td></tr></tbody></table><h2 id="insform-events" tabindex="-1"><a class="header-anchor" href="#insform-events" aria-hidden="true">#</a> InsForm Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u4EC5\u5728\u8868\u5355\u9879\u503C\u6539\u53D8\u65F6\u65F6\u89E6\u53D1</td><td>(formItem:Object)</td></tr><tr><td>save</td><td>\u63D0\u4EA4\u8868\u5355\u5E76\u6821\u9A8C\u6210\u529F\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(formData:Object)</td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u8868\u5355\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td></td></tr></tbody></table><h2 id="insform-methods" tabindex="-1"><a class="header-anchor" href="#insform-methods" aria-hidden="true">#</a> InsForm Methods</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toSaveData</td><td>\u89E6\u53D1\u8868\u5355\u6821\u9A8C\uFF0C\u6821\u9A8C\u5931\u8D25\u8FD4\u56DE false,\u6821\u9A8C\u6210\u529F\u8FD4\u56DE \u8868\u5355\u503C</td><td>\u2014</td></tr><tr><td>submitForm</td><td>\u89E6\u53D1\u63D0\u4EA4\u8868\u5355\u4E8B\u4EF6</td><td>\u2014</td></tr><tr><td>resetForm</td><td>\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6</td><td>\u2014</td></tr><tr><td>validateField</td><td>\u6821\u9A8C\u90E8\u5206\u8868\u5355\u9879\uFF0CformItem \u7684 prop \u683C\u5F0F\u4E3A<code>form[index].value</code>\uFF0Cindex \u4E3A\u6570\u7EC4\u987A\u5E8F</td><td>props\uFF1AString | Array\uFF0Ccallback</td></tr></tbody></table>',11);function io(c,t,r,m,u,b){const e=w("RouterLink"),x=w("render-demo-0"),l=w("demo"),v=w("render-demo-1"),k=w("render-demo-2"),n=w("render-demo-3"),p=w("render-demo-4");return I(),j(P,null,[S,N,o("nav",G,[o("ul",null,[o("li",null,[a(e,{to:"#\u793A\u4F8B"},{default:i(()=>[M]),_:1}),o("ul",null,[o("li",null,[a(e,{to:"#\u57FA\u7840\u8868\u5355"},{default:i(()=>[J]),_:1})]),o("li",null,[a(e,{to:"#\u591A\u5217\u8868\u5355"},{default:i(()=>[U]),_:1})]),o("li",null,[a(e,{to:"#\u7EAF\u6587\u672C"},{default:i(()=>[R]),_:1})]),o("li",null,[a(e,{to:"#\u4F7F\u7528\u63D2\u69FD"},{default:i(()=>[q]),_:1})]),o("li",null,[a(e,{to:"#forminline"},{default:i(()=>[O]),_:1})])])]),o("li",null,[a(e,{to:"#formitem-\u901A\u7528\u914D\u7F6E"},{default:i(()=>[z]),_:1})]),o("li",null,[a(e,{to:"#insform-attributes"},{default:i(()=>[K]),_:1})]),o("li",null,[a(e,{to:"#insform-events"},{default:i(()=>[$]),_:1})]),o("li",null,[a(e,{to:"#insform-methods"},{default:i(()=>[H]),_:1})])])]),Q,W,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      width: 500,
    },
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
      width: 500,
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      width: 500,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
      width: '200px',
    },
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'radio',
      label: 'radio',
      value: null,
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
    },
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      width: 500,
    },
    {
      name: 'upload',
      label: 'upload',
      value: [],
      element: 'upload',
      elementType: 'fileList',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        limit: 2,
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb',
      width: '500px',
    },
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}\u5206',
      },
    },
  ],
})

function handleBeforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  const isPng = file.type === 'image/png'
  const isLt500k = file.size / 1024 / 1024 < 0.5

  if (!isJPG && !isPng) {
    ElMessage.error('\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!')
    return false
  }
  if (!isLt500k) {
    ElMessage.error('\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!')
    return false
  }
  return true
}

function formatterValue(fileListItem) {
  let { response } = fileListItem
  return response.id
}

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
`},{highlight:i(()=>[X]),default:i(()=>[a(x)]),_:1}),Y,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'
let cols = 3
let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      col: 1,
    },
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
      col: 1,
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      col: 1,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: null,
      element: 'inputNumber',
      col: 1,
    },
    {
      name: 'checkbox',
      label: 'checkbox',
      value: [],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'radio',
      label: 'radio',
      value: null,
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'cascader',
      label: 'cascader',
      value: null,
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      col: 1,
    },
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}\u5206',
      },
      col: 1,
    },
    {
      name: 'uploadImgList',
      label: 'uploadImgList',
      value: [],
      element: 'upload',
      elementType: 'imgList',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        limit: 3,
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb',
      col: 3,
    },
    {
      name: 'uploadDragImg',
      label: 'uploadDragImg',
      value: null,
      element: 'upload',
      elementType: 'dragImg',
      attr: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        fileList: [],
        'before-upload': handleBeforeUpload,
      },
      formatterValue: formatterValue,
      tip: '\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb',
      col: 3,
    },
  ],
})

function formatterValue(fileListItem) {
  let { url, response } = fileListItem
  return response.url ? response.url : url
}

function handleBeforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  const isPng = file.type === 'image/png'
  const isLt500k = file.size / 1024 / 1024 < 0.5

  if (!isJPG && !isPng) {
    ElMessage.error('\u4E0A\u4F20\u7684\u6587\u4EF6\u53EA\u80FD\u662F JPG \u6216 PNG \u683C\u5F0F!')
    return false
  }
  if (!isLt500k) {
    ElMessage.error('\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB!')
    return false
  }
  return true
}

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit" />
</template>
`},{highlight:i(()=>[Z]),default:i(()=>[a(v)]),_:1}),oo,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'

let cols = 3

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: '\u8FD9\u662F\u4E00\u4E2Ainput',
      element: 'input',
      col: 1,
    },
    {
      name: 'select',
      label: 'select',
      value: 'optionsValue',
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
      col: 1,
    },
    {
      name: 'date',
      label: 'date',
      value: '2021-11-11',
      element: 'datePicker',
      col: 1,
    },
    {
      name: 'input-number',
      label: 'inputNumber',
      value: 100,
      element: 'inputNumber',
      col: 1,
    },
    {
      name: 'checkbox',
      label: 'checkbox',
      value: ['value1', 'value2', 'value3'],
      element: 'checkbox',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'radio',
      label: 'radio',
      value: 'value1',
      element: 'radio',
      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        { label: 'label3', value: 'value3' },
      ],
      col: 1,
    },
    {
      name: 'cascader',
      label: 'cascader',
      value: [
        ['value1', 'axure'],
        ['value1', 'sketch'],
      ],
      options: [
        {
          label: 'label1',
          value: 'value1',
          children: [
            { value: 'axure', label: 'Axure Components' },
            { value: 'sketch', label: 'Sketch Templates' },
            { value: 'jiaohu', label: '\u7EC4\u4EF6\u4EA4\u4E92\u6587\u6863' },
          ],
        },
        { label: 'label2', value: 'value2' },
      ],
      element: 'cascader',
      attr: {
        props: {
          multiple: true,
        },
      },
      col: 1,
    },
    {
      name: 'uploadFileList',
      label: 'uploadFileList',
      value: [],
      element: 'upload',
      elementType: 'fileList',
      attr: {
        fileList: [],
      },
      col: 2,
      width: '600px',
    },
    {
      name: 'uploadDragImg',
      label: 'uploadDragImg',
      value: [],
      element: 'upload',
      elementType: 'dragImg',
      attr: {
        fileList: [],
      },
      col: 3,
    },
    {
      name: 'uploadImgList',
      label: 'uploadImgList',
      value: [],
      element: 'upload',
      elementType: 'imgList',
      attr: {
        fileList: [],
      },
      col: 3,
    },
    {
      name: 'rate',
      label: 'rate',
      value: 4.3,
      element: 'rate',
      col: 1,
    },
  ],
})

setTimeout(() => {
  let url =
    'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'

  let fileList = dynamicForm.form.find(
    (d) => d.element === 'upload' && d.elementType === 'fileList'
  )
  fileList.attr.fileList = [
    {
      name: 'foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood.jpeg',
      url: url,
    },
    { name: 'food2.jpeg', url: 'url' },
    { name: 'food3.jpeg', url: url },
  ]

  let imgList = dynamicForm.form.find((d) => d.element === 'upload' && d.elementType === 'imgList')
  imgList.attr.fileList = [
    { name: 'food.jpeg', url: url },
    { name: 'food2.jpeg', url: url },
    { name: 'food3.jpeg', url: url },
  ]

  let dragImg = dynamicForm.form.find((d) => d.element === 'upload' && d.elementType === 'dragImg')
  dragImg.attr.fileList = [{ name: 'food.jpeg', url: url }]
}, 1000)
<\/script>

<template>
  <ins-form
    :dynamicForm="dynamicForm"
    :label-width="'120px'"
    :is-text="true"
    :cols="cols"
    :has-submit="false"
  />
</template>
`},{highlight:i(()=>[so]),default:i(()=>[a(k)]),_:1}),eo,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'
let dynamicForm = reactive({
  form: [
    {
      name: 'slot',
      label: 'slot',
      value: null,
      isSlot: true,
    },
    {
      name: 'slotRules',
      label: 'slotRules',
      value: null,
      isSlot: true,
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit">
    <template #slot="{ formItem, index }">
      <el-input v-model="formItem.value" placeholder="\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879" />
    </template>
    <template #slotRules="{ formItem, index }">
      <el-input v-model="formItem.value" placeholder="\u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7\u63D2\u69FD\u5B9E\u73B0\u7684\u8868\u5355\u9879" />
    </template>
  </ins-form>
</template>
`},{highlight:i(()=>[lo]),default:i(()=>[a(n)]),_:1}),to,ro,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
    },
    {
      name: 'select',
      label: 'select',
      value: null,
      element: 'select',
      options: [
        {
          label: 'optionsLabel',
          value: 'optionsValue',
        },
      ],
    },
    {
      name: 'date',
      label: 'date',
      value: null,
      element: 'datePicker',
      rules: [{ require: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" :inline="true" @save="submit" />
</template>
`},{highlight:i(()=>[no]),default:i(()=>[a(p)]),_:1}),ao],64)}var po=L(T,[["render",io]]);export{po as default};
