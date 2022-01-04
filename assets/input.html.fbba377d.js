var w=Object.defineProperty;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(r,t,e)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,d=(r,t)=>{for(var e in t||(t={}))g.call(t,e)&&f(r,e,t[e]);if(_)for(var e of _(t))F.call(t,e)&&f(r,e,t[e]);return r};import{_ as E,r as h,o as b,c as A,a as o,b as a,w as i,F as D,d as s,e as B,V as v}from"./app.af016c97.js";const C={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=v;function y(n,c){const l=r("ins-form");return t(),e(l,{dynamicForm:n.dynamicForm,onSave:n.submit},null,8,["dynamicForm","onSave"])}const{reactive:p}=v;return d({render:y},{setup(n,{expose:c}){c();let l=p({form:[{name:"input",label:"input",value:null,element:"input",attr:{placeholder:"\u8FD9\u662F\u4E00\u4E2Ainput"}},{name:"textarea",label:"textarea",value:null,element:"input",elementType:"textarea",attr:{placeholder:"\u8FD9\u662F\u4E00\u4E2Atextarea",autosize:{minRows:4,maxRows:6}}}]});function k(x){console.log(x)}const u={dynamicForm:l,submit:k,reactive:p};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}(),"render-demo-1":function(){const{resolveComponent:r,openBlock:t,createBlock:e}=v;function y(n,c){const l=r("ins-form");return t(),e(l,{dynamicForm:n.dynamicForm,onSave:n.submit},null,8,["dynamicForm","onSave"])}const{reactive:p}=v;return d({render:y},{setup(n,{expose:c}){c();let l=p({form:[{name:"input",label:"input",value:null,element:"input",attr:{placeholder:"\u8FD9\u662F\u4E00\u4E2Ainput"},rules:[{required:!0,trigger:"change"}]},{name:"textarea",label:"textarea",value:null,element:"input",elementType:"textarea",attr:{placeholder:"\u8FD9\u662F\u4E00\u4E2Atextarea",autosize:{minRows:4,maxRows:6}},rules:[{required:!0,trigger:"change"}]}]});function k(x){console.log(x)}const u={dynamicForm:l,submit:k,reactive:p};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}()}},R=o("h1",{id:"input",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#input","aria-hidden":"true"},"#"),s(" Input")],-1),S={class:"table-of-contents"},T=s("\u793A\u4F8B"),I=s("\u57FA\u7840 Input"),q=s("\u8868\u5355\u6821\u9A8C"),z=s("Input \u7684 formItem \u914D\u7F6E"),V=o("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),N=o("h3",{id:"\u57FA\u7840-input",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u57FA\u7840-input","aria-hidden":"true"},"#"),s(" \u57FA\u7840 Input")],-1),$=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        placeholder"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u8FD9\u662F\u4E00\u4E2Ainput'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        placeholder"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u8FD9\u662F\u4E00\u4E2Atextarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        autosize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," { minRows"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"4"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," maxRows"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"6"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
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
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),j=o("h3",{id:"\u8868\u5355\u6821\u9A8C",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u8868\u5355\u6821\u9A8C","aria-hidden":"true"},"#"),s(" \u8868\u5355\u6821\u9A8C")],-1),L=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        placeholder"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u8FD9\u662F\u4E00\u4E2Ainput'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      rules"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [{ required"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," trigger"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'change'"),o("span",{style:{color:"var(--shiki-color-text)"}}," }]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'input'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      elementType"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'textarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        placeholder"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u8FD9\u662F\u4E00\u4E2Atextarea'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        autosize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," { minRows"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"4"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," maxRows"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"6"),o("span",{style:{color:"var(--shiki-color-text)"}}," }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
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
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),O=B('<h2 id="input-\u7684-formitem-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#input-\u7684-formitem-\u914D\u7F6E" aria-hidden="true">#</a> Input \u7684 formItem \u914D\u7F6E</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>elementType</td><td>\u4E8C\u7EA7\u7C7B\u578B</td><td>input\u3001textarea</td><td>input</td></tr></tbody></table>',2),P=s("\u{1F389} \u5176\u4ED6\u53C2\u8003"),G=s("\u901A\u7528\u914D\u7F6E");function H(r,t,e,y,p,m){const n=h("RouterLink"),c=h("render-demo-0"),l=h("demo"),k=h("render-demo-1");return b(),A(D,null,[R,o("nav",S,[o("ul",null,[o("li",null,[a(n,{to:"#\u793A\u4F8B"},{default:i(()=>[T]),_:1}),o("ul",null,[o("li",null,[a(n,{to:"#\u57FA\u7840-input"},{default:i(()=>[I]),_:1})]),o("li",null,[a(n,{to:"#\u8868\u5355\u6821\u9A8C"},{default:i(()=>[q]),_:1})])])]),o("li",null,[a(n,{to:"#input-\u7684-formitem-\u914D\u7F6E"},{default:i(()=>[z]),_:1})])])]),V,N,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      attr: {
        placeholder: '\u8FD9\u662F\u4E00\u4E2Ainput',
      },
    },
    {
      name: 'textarea',
      label: 'textarea',
      value: null,
      element: 'input',
      elementType: 'textarea',
      attr: {
        placeholder: '\u8FD9\u662F\u4E00\u4E2Atextarea',
        autosize: { minRows: 4, maxRows: 6 },
      },
    },
  ],
})

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
`},{highlight:i(()=>[$]),default:i(()=>[a(c)]),_:1}),j,a(l,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'

let dynamicForm = reactive({
  form: [
    {
      name: 'input',
      label: 'input',
      value: null,
      element: 'input',
      attr: {
        placeholder: '\u8FD9\u662F\u4E00\u4E2Ainput',
      },
      rules: [{ required: true, trigger: 'change' }],
    },
    {
      name: 'textarea',
      label: 'textarea',
      value: null,
      element: 'input',
      elementType: 'textarea',
      attr: {
        placeholder: '\u8FD9\u662F\u4E00\u4E2Atextarea',
        autosize: { minRows: 4, maxRows: 6 },
      },
      rules: [{ required: true, trigger: 'change' }],
    },
  ],
})

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" @save="submit" />
</template>
`},{highlight:i(()=>[L]),default:i(()=>[a(k)]),_:1}),O,o("p",null,[P,a(n,{to:"/components/form/form.html#formitem-%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE"},{default:i(()=>[G]),_:1})])],64)}var M=E(C,[["render",H]]);export{M as default};
