"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6862],{9871:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var l=n(4848),c=n(8453);const t={id:"useScrollLock",title:"useScrollLock",sidebar_label:"useScrollLock"},s=void 0,r={id:"hooks/useScrollLock",title:"useScrollLock",description:"Hook to lock and unlock scrolling on the body element with an extra layer of security using MutationObserver.",source:"@site/docs/hooks/useScrollLock.md",sourceDirName:"hooks",slug:"/hooks/useScrollLock",permalink:"/react-fast-hooks/docs/hooks/useScrollLock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useScrollLock",title:"useScrollLock",sidebar_label:"useScrollLock"},sidebar:"docsSidebar",previous:{title:"useScrollIntoPosition",permalink:"/react-fast-hooks/docs/hooks/useScrollIntoPosition"},next:{title:"useScrollPosition",permalink:"/react-fast-hooks/docs/hooks/useScrollPosition"}},i={},d=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function u(o){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...o.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Hook to lock and unlock scrolling on the body element with an extra layer of security using MutationObserver."}),"\n",(0,l.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst { lockScroll, unlockScroll, isLocked } = useScrollLock();\n\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={lockScroll}>Lock Scroll</button>\n\t\t\t<button onClick={unlockScroll}>Unlock Scroll</button>\n\t\t\t<p>{`Scroll is ${isLocked ? "locked" : "unlocked"}`}</p>\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,l.jsx)(e.p,{children:"Returns"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"lockScroll"})," : ",(0,l.jsx)(e.code,{children:"() => void"})," - Locks scrolling on the body element."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"unlockScroll"})," : ",(0,l.jsx)(e.code,{children:"() => void"})," - Unlocks scrolling on the body element."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"isLocked"})," : ",(0,l.jsx)(e.code,{children:"boolean"})," - A boolean indicating if the scroll is locked or not."]}),"\n"]})]})}function a(o={}){const{wrapper:e}={...(0,c.R)(),...o.components};return e?(0,l.jsx)(e,{...o,children:(0,l.jsx)(u,{...o})}):u(o)}},8453:(o,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var l=n(6540);const c={},t=l.createContext(c);function s(o){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function r(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:s(o.components),l.createElement(t.Provider,{value:e},o.children)}}}]);