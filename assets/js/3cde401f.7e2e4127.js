"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1809],{5724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(4848),o=t(8453);const s={id:"useWindowSize",title:"useWindowSize",sidebar_label:"useWindowSize"},r=void 0,d={id:"hooks/useWindowSize",title:"useWindowSize",description:"Hook to get the current window size.",source:"@site/docs/hooks/useWindowSize.md",sourceDirName:"hooks",slug:"/hooks/useWindowSize",permalink:"/react-fast-hooks/docs/hooks/useWindowSize",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useWindowSize",title:"useWindowSize",sidebar_label:"useWindowSize"},sidebar:"docsSidebar",previous:{title:"useWindowScrollPosition",permalink:"/react-fast-hooks/docs/hooks/useWindowScrollPosition"},next:{title:"useWindowTouchSwipe",permalink:"/react-fast-hooks/docs/hooks/useWindowTouchSwipe"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Hook to get the current window size."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function App() {\n\tconst { width, height } = useWindowSize(200); // Optional throttle time\n\n\treturn (\n\t\t<div>\n\t\t\t<p>Window Width: {width}px</p>\n\t\t\t<p>Window Height: {height}px</p>\n\t\t</div>\n\t);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"throttleTime"})," : A number indicating the time in milliseconds to throttle the window resize event. Defaults to 200."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Returns : ",(0,i.jsx)(n.code,{children:"WindowSize"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"width"})," : A number or null indicating the current width of the window."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"height"})," : A number or null indicating the current height of the window."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);