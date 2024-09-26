"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4600],{7812:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(4848),r=n(8453);const s={id:"useBattery",title:"useBattery",sidebar_label:"useBattery"},a=void 0,o={id:"hooks/useBattery",title:"useBattery",description:"Hook to get the current battery status of the device.",source:"@site/docs/hooks/useBattery.md",sourceDirName:"hooks",slug:"/hooks/useBattery",permalink:"/react-fast-hooks/docs/hooks/useBattery",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useBattery",title:"useBattery",sidebar_label:"useBattery"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/react-fast-hooks/docs/intro"},next:{title:"useClickOutside",permalink:"/react-fast-hooks/docs/hooks/useClickOutside"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function d(t){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Hook to get the current battery status of the device."}),"\n",(0,i.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst batteryState = useBattery();\n\n\treturn (\n\t\t<div>\n\t\t\t{batteryState.loading ? (\n\t\t\t\t<p>Loading battery status...</p>\n\t\t\t) : !batteryState.supported ? (\n\t\t\t\t<p>Battery API not supported on this device.</p>\n\t\t\t) : (\n\t\t\t\t<div>\n\t\t\t\t\t<p>Battery Level: {batteryState.level * 100}%</p>\n\t\t\t\t\t<p>Charging: {batteryState.charging ? "Yes" : "No"}</p>\n\t\t\t\t\t<p>Charging Time: {batteryState.chargingTime} seconds</p>\n\t\t\t\t\t<p>Discharging Time: {batteryState.dischargingTime} seconds</p>\n\t\t\t\t</div>\n\t\t\t)}\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,i.jsxs)(e.p,{children:["Returns : ",(0,i.jsx)(e.code,{children:"BatteryState"})]}),"\n",(0,i.jsx)(e.p,{children:"An object containing the following properties:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"supported"})," : A boolean indicating if the Battery API is supported."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"loading"})," : A boolean indicating if the battery status is currently loading."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"level"})," : A number or null indicating the current battery level (0 to 1)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"charging"})," : A boolean or null indicating whether the battery is currently charging."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"chargingTime"})," : A number or null indicating the time remaining until the battery is fully charged (in seconds)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"dischargingTime"})," : A number or null indicating the time remaining until the battery is fully discharged (in seconds)."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);