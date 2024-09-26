"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1411],{2363:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const o={id:"useIdle",title:"useIdle",sidebar_label:"useIdle"},r=void 0,l={id:"hooks/useIdle",title:"useIdle",description:"Hook to detect user inactivity.",source:"@site/docs/hooks/useIdle.md",sourceDirName:"hooks",slug:"/hooks/useIdle",permalink:"/react-fast-hooks/docs/hooks/useIdle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useIdle",title:"useIdle",sidebar_label:"useIdle"},sidebar:"docsSidebar",previous:{title:"useHover",permalink:"/react-fast-hooks/docs/hooks/useHover"},next:{title:"useIntersectionObserver",permalink:"/react-fast-hooks/docs/hooks/useIntersectionObserver"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function u(e){const s={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Hook to detect user inactivity."}),"\n",(0,t.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst isIdle = useIdle({ timeout: 5000 });\n\n\treturn (\n\t\t<div>\n\t\t\t<h1>User Idle Hook</h1>\n\t\t\t<p>{isIdle ? "User is idle" : "User is active"}</p>\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"api",children:"API"}),"\n",(0,t.jsx)(s.p,{children:"Parameter:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"options"})," : ",(0,t.jsx)(s.code,{children:"UseIdleOptions"})," - An object specifying the timeout in milliseconds."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"UseIdleOptions"})," includes the following properties:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"timeout"})," : ",(0,t.jsx)(s.code,{children:"number"})," - The time in milliseconds to consider the user as idle."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Returns : A boolean value indicating whether the user is idle or not, updated in real-time. Useful for tracking user inactivity."})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);