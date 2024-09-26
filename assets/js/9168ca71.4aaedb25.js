"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1607],{1834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(4848),r=n(8453);const o={id:"useIntersectionObserver",title:"useIntersectionObserver",sidebar_label:"useIntersectionObserver"},i=void 0,c={id:"hooks/useIntersectionObserver",title:"useIntersectionObserver",description:"Hook to observe the visibility of an element using the Intersection Observer API.",source:"@site/docs/hooks/useIntersectionObserver.md",sourceDirName:"hooks",slug:"/hooks/useIntersectionObserver",permalink:"/react-fast-hooks/docs/hooks/useIntersectionObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useIntersectionObserver",title:"useIntersectionObserver",sidebar_label:"useIntersectionObserver"},sidebar:"docsSidebar",previous:{title:"useIdle",permalink:"/react-fast-hooks/docs/hooks/useIdle"},next:{title:"useKeyCombo",permalink:"/react-fast-hooks/docs/hooks/useKeyCombo"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function h(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Hook to observe the visibility of an element using the Intersection Observer API."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst elementRef = useRef(null);\n\n\tconst entry = useIntersectionObserver(elementRef, {\n\t\tthreshold: 1,\n\t});\n\n\treturn (\n\t\t<div>\n\t\t\t<div\n\t\t\t\tref={elementRef}\n\t\t\t\tstyle={{\n\t\t\t\t\theight: "100px",\n\t\t\t\t\tbackground: entry?.isIntersecting ? "lightblue" : "red",\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t{entry?.isIntersecting ? "In view" : "Out of view"}\n\t\t\t</div>\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.p,{children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," : ",(0,s.jsx)(t.code,{children:"IntersectionObserverOptions"})," - The Intersection Observer options. These include:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"root"})," : ",(0,s.jsx)(t.code,{children:"Element"})," - The element that is used as the viewport for checking visibility of the target."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"rootMargin"})," : ",(0,s.jsx)(t.code,{children:"string"})," - Margin around the root."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"threshold"})," : ",(0,s.jsx)(t.code,{children:"number | number[]"})," - A single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Returns"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"observer"})," : ",(0,s.jsx)(t.code,{children:"(node: Element | null) => void"})," - A callback ref to set the target element to be observed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"entry"})," : ",(0,s.jsx)(t.code,{children:"IntersectionObserverEntry | null"})," - The IntersectionObserverEntry providing information about the intersection of the target with the root."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);