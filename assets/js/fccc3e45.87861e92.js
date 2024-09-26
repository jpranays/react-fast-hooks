"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7641],{6115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(4848),s=n(8453);const r={id:"useHover",title:"useHover",sidebar_label:"useHover"},i=void 0,c={id:"hooks/useHover",title:"useHover",description:"Hook to determine if an element is hovered.",source:"@site/docs/hooks/useHover.md",sourceDirName:"hooks",slug:"/hooks/useHover",permalink:"/react-fast-hooks/docs/hooks/useHover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useHover",title:"useHover",sidebar_label:"useHover"},sidebar:"docsSidebar",previous:{title:"useHistory",permalink:"/react-fast-hooks/docs/hooks/useHistory"},next:{title:"useIdle",permalink:"/react-fast-hooks/docs/hooks/useIdle"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function a(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Hook to determine if an element is hovered."}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst elementRef = useRef(null);\n\tconst isHovered = useHover(elementRef);\n\n\treturn (\n\t\t<div\n\t\t\tref={elementRef}\n\t\t\tstyle={{\n\t\t\t\tpadding: "20px",\n\t\t\t\tbackgroundColor: isHovered ? "lightblue" : "lightgrey",\n\t\t\t}}\n\t\t>\n\t\t\t{isHovered ? "Hovered!" : "Hover over me!"}\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,o.jsx)(t.p,{children:"Parameter"}),"\n",(0,o.jsxs)(t.p,{children:["ref : ",(0,o.jsx)(t.code,{children:"elementRef"})," - The ref to the element to track hover state."]}),"\n",(0,o.jsxs)(t.p,{children:["Returns : ",(0,o.jsx)(t.code,{children:"boolean"})]}),"\n",(0,o.jsx)(t.p,{children:"An boolean indicating if the element is hovered or not."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);