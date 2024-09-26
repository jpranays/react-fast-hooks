"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4014],{6951:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(4848),s=o(8453);const i={id:"useScrollPosition",title:"useScrollPosition",sidebar_label:"useScrollPosition"},l=void 0,r={id:"hooks/useScrollPosition",title:"useScrollPosition",description:"Hook to get the current scroll position of a specified element.",source:"@site/docs/hooks/useScrollPosition.md",sourceDirName:"hooks",slug:"/hooks/useScrollPosition",permalink:"/react-fast-hooks/docs/hooks/useScrollPosition",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useScrollPosition",title:"useScrollPosition",sidebar_label:"useScrollPosition"},sidebar:"docsSidebar",previous:{title:"useScrollLock",permalink:"/react-fast-hooks/docs/hooks/useScrollLock"},next:{title:"useSessionStorage",permalink:"/react-fast-hooks/docs/hooks/useSessionStorage"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function u(e){const t={br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Hook to get the current scroll position of a specified element."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst elementRef = useRef(null);\n\tconst scrollPosition = useScrollPosition(elementRef, 200); // Throttle time is 200ms\n\n\treturn (\n\t\t<div>\n\t\t\t<div\n\t\t\t\tref={elementRef}\n\t\t\t\tstyle={{ overflow: "auto", height: "100px", width: "100%" }}\n\t\t\t>\n\t\t\t\t{/* Content goes here */}\n\t\t\t\t<div style={{ height: "1000px", width: "5000px" }}></div>\n\t\t\t</div>\n\t\t\t<p>\n\t\t\t\tScroll X: {scrollPosition.x}, Scroll Y: {scrollPosition.y}\n\t\t\t</p>\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.p,{children:["Parameter",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"elementRef"})," : A React ref object pointing to the element whose scroll position needs to be tracked."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"throttleTime"})," : A number indicating the time in milliseconds to throttle the window resize event. Defaults to 200."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Returns : ",(0,n.jsx)(t.code,{children:"ScrollPosition"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"x"})," : A number or null indicating the current horizontal scroll position of the window."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"y"})," : A number or null indicating the current vertical scroll position of the window."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(6540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);