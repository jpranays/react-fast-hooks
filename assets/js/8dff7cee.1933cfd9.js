"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8639],{9599:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(4848),r=t(8453);const o={id:"useKeyPress",title:"useKeyPress",sidebar_label:"useKeyPress"},i=void 0,c={id:"hooks/useKeyPress",title:"useKeyPress",description:"Hook to detect if a specified key is pressed.",source:"@site/docs/hooks/useKeyPress.md",sourceDirName:"hooks",slug:"/hooks/useKeyPress",permalink:"/react-fast-hooks/docs/hooks/useKeyPress",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useKeyPress",title:"useKeyPress",sidebar_label:"useKeyPress"},sidebar:"docsSidebar",previous:{title:"useKeyCombo",permalink:"/react-fast-hooks/docs/hooks/useKeyCombo"},next:{title:"useLocalStorage",permalink:"/react-fast-hooks/docs/hooks/useLocalStorage"}},d={},a=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function l(e){const s={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Hook to detect if a specified key is pressed."}),"\n",(0,n.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst isEnterPressed = useKeyPress("Enter");\n\n\treturn (\n\t\t<div>\n\t\t\t<h1>Press the Enter key</h1>\n\t\t\t{isEnterPressed && <p>Enter key is pressed!</p>}\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,n.jsx)(s.h3,{id:"api",children:"API"}),"\n",(0,n.jsx)(s.p,{children:"Parameter"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"key"})," : ",(0,n.jsx)(s.code,{children:"string"})," - The key to detect."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Returns : ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"A boolean indicating if the specified key is pressed or not."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(6540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);