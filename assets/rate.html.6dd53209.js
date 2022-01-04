var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(l,t,e)=>t in l?b(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,f=(l,t)=>{for(var e in t||(t={}))A.call(t,e)&&w(l,e,t[e]);if(m)for(var e of m(t))R.call(t,e)&&w(l,e,t[e]);return l};import{_ as E,r as h,o as B,c as D,a as o,b as a,w as r,F as I,d as s,e as T,V as _,E as L}from"./app.af016c97.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,openBlock:t,createBlock:e}=_;function v(k,x){const y=l("ins-form");return t(),e(y,{dynamicForm:k.dynamicForm,cols:k.cols,onSave:k.submit},null,8,["dynamicForm","cols","onSave"])}const{reactive:p}=_,{ChatRound:i,ChatLineRound:n,ChatDotRound:c}=L;return f({render:v},{setup(k,{expose:x}){x();let y=3,g=p({form:[{name:"rate",label:"rate",value:null,element:"rate",attr:{},col:1},{name:"rateColors",label:"rateColors",value:null,element:"rate",attr:{colors:["#99A9BF","#F7BA2A","#FF9900"]},col:1},{name:"rateHalf",label:"rateHalf",value:null,element:"rate",attr:{"allow-half":!0},col:1},{name:"rateText",label:"rateText",value:null,element:"rate",attr:{"show-text":!0,texts:["1","2","3","4","5"]},col:1},{name:"rateIcon",label:"rateIcon",value:null,element:"rate",attr:{icons:[i,n,c],"void-icon":i,colors:["#409eff","#67c23a","#FF9900"]},col:1},{name:"rateReadOnly",label:"rateReadOnly",value:3.7,element:"rate",attr:{disabled:!0,"show-score":!0,"text-color":"#ff9900","score-template":"{value}\u5206"},col:1}]});function F(C){console.log(C)}const d={cols:y,dynamicForm:g,submit:F,reactive:p,ChatRound:i,ChatLineRound:n,ChatDotRound:c};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}})}()}},H=o("h1",{id:"rate",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#rate","aria-hidden":"true"},"#"),s(" Rate")],-1),V={class:"table-of-contents"},S=s("\u793A\u4F8B"),N=s("\u57FA\u7840 Rate"),$=s("\u8868\u5355\u6821\u9A8C"),P=s("Rate \u7684 formItem \u914D\u7F6E"),j=o("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),q=o("h3",{id:"\u57FA\u7840-rate",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u57FA\u7840-rate","aria-hidden":"true"},"#"),s(" \u57FA\u7840 Rate")],-1),z=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { reactive } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { ChatRound"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," ChatLineRound"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," ChatDotRound } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'@element-plus/icons-vue'")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," cols "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"let"),o("span",{style:{color:"var(--shiki-color-text)"}}," dynamicForm "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"reactive"),o("span",{style:{color:"var(--shiki-color-text)"}},"({")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {}"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateColors'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateColors'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        colors"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#99A9BF'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#F7BA2A'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#FF9900'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateHalf'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateHalf'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'allow-half'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateText'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateText'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'show-text'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        texts"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'1'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'2'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'3'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'4'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'5'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateIcon'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateIcon'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"null"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        icons"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," [ChatRound"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," ChatLineRound"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," ChatDotRound]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'void-icon'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ChatRound"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        colors"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#409eff'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#67c23a'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#FF9900'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateReadOnly'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      label"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rateReadOnly'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      value"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"3.7"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      element"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'rate'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      attr"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        disabled"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'show-score'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'text-color'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'#ff9900'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'score-template'"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'{value}\u5206'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      col"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
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
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ins-form"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"dynamicForm"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"cols"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"cols"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"save"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"submit"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),G=T('<h3 id="\u8868\u5355\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u6821\u9A8C" aria-hidden="true">#</a> \u8868\u5355\u6821\u9A8C</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7531\u4E8E el-rate \u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u6821\u9A8C\u6CA1\u6709\u610F\u4E49</p></div><h2 id="rate-\u7684-formitem-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#rate-\u7684-formitem-\u914D\u7F6E" aria-hidden="true">#</a> Rate \u7684 formItem \u914D\u7F6E</h2>',3),J=s("\u{1F389} \u53C2\u8003"),K=s("\u901A\u7528\u914D\u7F6E");function M(l,t,e,v,p,i){const n=h("RouterLink"),c=h("render-demo-0"),u=h("demo");return B(),D(I,null,[H,o("nav",V,[o("ul",null,[o("li",null,[a(n,{to:"#\u793A\u4F8B"},{default:r(()=>[S]),_:1}),o("ul",null,[o("li",null,[a(n,{to:"#\u57FA\u7840-rate"},{default:r(()=>[N]),_:1})]),o("li",null,[a(n,{to:"#\u8868\u5355\u6821\u9A8C"},{default:r(()=>[$]),_:1})])])]),o("li",null,[a(n,{to:"#rate-\u7684-formitem-\u914D\u7F6E"},{default:r(()=>[P]),_:1})])])]),j,q,a(u,{customClass:"",sourceCode:`<script setup>
import { reactive } from 'vue'
import { ChatRound, ChatLineRound, ChatDotRound } from '@element-plus/icons-vue'

let cols = 3

let dynamicForm = reactive({
  form: [
    {
      name: 'rate',
      label: 'rate',
      value: null,
      element: 'rate',
      attr: {},
      col: 1,
    },
    {
      name: 'rateColors',
      label: 'rateColors',
      value: null,
      element: 'rate',
      attr: {
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      },
      col: 1,
    },
    {
      name: 'rateHalf',
      label: 'rateHalf',
      value: null,
      element: 'rate',
      attr: {
        'allow-half': true,
      },
      col: 1,
    },
    {
      name: 'rateText',
      label: 'rateText',
      value: null,
      element: 'rate',
      attr: {
        'show-text': true,
        texts: ['1', '2', '3', '4', '5'],
      },
      col: 1,
    },
    {
      name: 'rateIcon',
      label: 'rateIcon',
      value: null,
      element: 'rate',
      attr: {
        icons: [ChatRound, ChatLineRound, ChatDotRound],
        'void-icon': ChatRound,
        colors: ['#409eff', '#67c23a', '#FF9900'],
      },
      col: 1,
    },
    {
      name: 'rateReadOnly',
      label: 'rateReadOnly',
      value: 3.7,
      element: 'rate',
      attr: {
        disabled: true,
        'show-score': true,
        'text-color': '#ff9900',
        'score-template': '{value}\u5206',
      },
      col: 1,
    },
  ],
})

function submit(value) {
  console.log(value)
}
<\/script>

<template>
  <ins-form :dynamicForm="dynamicForm" :cols="cols" @save="submit" />
</template>
`},{highlight:r(()=>[z]),default:r(()=>[a(c)]),_:1}),G,o("p",null,[J,a(n,{to:"/components/form/form.html#formitem-%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE"},{default:r(()=>[K]),_:1})])],64)}var W=E(O,[["render",M]]);export{W as default};
