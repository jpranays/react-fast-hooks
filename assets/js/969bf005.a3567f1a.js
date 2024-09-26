"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4540],{7282:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=e(4848),o=e(8453);const s={id:"useNotification",title:"useNotification",sidebar_label:"useNotification"},c=void 0,r={id:"hooks/useNotification",title:"useNotification",description:"Hook to trigger browser notifications.",source:"@site/docs/hooks/useNotification.md",sourceDirName:"hooks",slug:"/hooks/useNotification",permalink:"/react-fast-hooks/docs/hooks/useNotification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useNotification",title:"useNotification",sidebar_label:"useNotification"},sidebar:"docsSidebar",previous:{title:"useMutationObserver",permalink:"/react-fast-hooks/docs/hooks/useMutationObserver"},next:{title:"useOnlineStatus",permalink:"/react-fast-hooks/docs/hooks/useOnlineStatus"}},d={},a=[{value:"Usage",id:"usage",level:3},{value:"API",id:"api",level:3}];function l(i){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Hook to trigger browser notifications."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'function App() {\n\tconst {\n\t\tpermission,\n\t\tshowNotification,\n\t\trequestPermission,\n\t\tupdateNotification,\n\t} = useNotification("Hello!", {\n\t\tbody: "This is a notification body",\n\t\ticon: "/path/to/icon.png",\n\t});\n\n\tuseEffect(() => {\n\t\tif (permission === "granted") {\n\t\t\tshowNotification();\n\t\t} else if (permission === "default") {\n\t\t\trequestPermission();\n\t\t}\n\t}, [permission, showNotification, requestPermission]);\n\n\tconst handleUpdateNotification = () => {\n\t\tupdateNotification("Updated Title!", {\n\t\t\tbody: "This is an updated notification body",\n\t\t\ticon: "/path/to/updated-icon.png",\n\t\t});\n\t};\n\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={showNotification}>Show Notification</button>\n\t\t\t<button onClick={handleUpdateNotification}>Update Notification</button>\n\t\t</div>\n\t);\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.p,{children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"title"})," : ",(0,n.jsx)(t.code,{children:"string"})," - The title of the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"options"})," : ",(0,n.jsx)(t.code,{children:"NotificationOptions"})," - Optional configuration for the notification. These include:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"body"})," : ",(0,n.jsx)(t.code,{children:"string"})," - The body text of the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"icon"})," : ",(0,n.jsx)(t.code,{children:"string"})," - The URL of an icon to be displayed with the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"dir"})," : ",(0,n.jsx)(t.code,{children:"NotificationDirection"})," - The direction of the notification; it can be auto, ltr, or rtl."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lang"})," : ",(0,n.jsx)(t.code,{children:"string"})," - The language of the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tag"})," : ",(0,n.jsx)(t.code,{children:"string"})," - An identifying tag for the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"renotify"})," : ",(0,n.jsx)(t.code,{children:"boolean"})," - Whether to re-notify if a notification with the same tag is already displayed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"silent"})," : ",(0,n.jsx)(t.code,{children:"boolean"})," - Whether the notification should be silent."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"requireInteraction"})," : ",(0,n.jsx)(t.code,{children:"boolean"})," - Whether the notification should remain active until the user clicks or dismisses it."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"badge"})," : ",(0,n.jsx)(t.code,{children:"string"})," - URL of an image to represent the notification when there is not enough space to display the icon."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"vibrate"})," : ",(0,n.jsx)(t.code,{children:"number | number[]"})," - A vibration pattern for the device."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"timestamp"})," : ",(0,n.jsx)(t.code,{children:"number"})," - The time the notification was created."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"image"})," : ",(0,n.jsx)(t.code,{children:"string"})," - URL of an image to be displayed with the notification."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Returns"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"permission"})," : ",(0,n.jsx)(t.code,{children:"NotificationPermission"})," - The current permission status for notifications."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"showNotification"})," : ",(0,n.jsx)(t.code,{children:"() => void"})," - A function to trigger the notification."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"requestPermission"})," : ",(0,n.jsx)(t.code,{children:"() => void"})," - A function to request notification permission from the user."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"updateNotification"})," : ",(0,n.jsx)(t.code,{children:"(newTitle: string, newOptions: NotificationOptions) => void"})," - A function to update the notification with new title and options."]}),"\n"]})]})}function h(i={}){const{wrapper:t}={...(0,o.R)(),...i.components};return t?(0,n.jsx)(t,{...i,children:(0,n.jsx)(l,{...i})}):l(i)}},8453:(i,t,e)=>{e.d(t,{R:()=>c,x:()=>r});var n=e(6540);const o={},s=n.createContext(o);function c(i){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof i?i(t):{...t,...i}}),[t,i])}function r(i){let t;return t=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:c(i.components),n.createElement(s.Provider,{value:t},i.children)}}}]);