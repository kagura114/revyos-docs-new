"use strict";(self.webpackChunkrevyos_docs_new=self.webpackChunkrevyos_docs_new||[]).push([[1848],{1320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Changelog/lpi4a/20240202","title":"20240202","description":"System Version","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/Changelog/lpi4a/20240202.md","sourceDirName":"Changelog/lpi4a","slug":"/Changelog/lpi4a/20240202","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20240202","draft":false,"unlisted":false,"editUrl":"https://github.com/kagura114/revyos-docs-new/docs/Changelog/lpi4a/20240202.md","tags":[],"version":"current","frontMatter":{},"sidebar":"documentSidebar","previous":{"title":"20231210","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20231210"},"next":{"title":"20240601","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20240601"}}');var l=s(4848),r=s(8453);const t={},o="20240202",d={},a=[{value:"System Version",id:"system-version",level:2},{value:"Version Download",id:"version-download",level:2},{value:"System and Desktop",id:"system-and-desktop",level:3},{value:"Hardware Acceleration",id:"hardware-acceleration",level:3},{value:"Supported Applications",id:"supported-applications",level:3},{value:"Kernel Related",id:"kernel-related",level:3},{value:"Hardware Related",id:"hardware-related",level:3},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Existing Issues",id:"existing-issues",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"20240202",children:"20240202"})}),"\n",(0,l.jsx)(n.h2,{id:"system-version",children:"System Version"}),"\n",(0,l.jsx)(n.p,{children:"RevyOS 20240202 Version"}),"\n",(0,l.jsx)(n.h2,{id:"version-download",children:"Version Download"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/test/20240202/",children:"RevyOS 20240202 lpi4a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"boot-lpi4a-20240202_141632.ext4.zst"}),"\n",(0,l.jsx)(n.li,{children:"root-lpi4a-20240202_141632.ext4.zst"}),"\n",(0,l.jsx)(n.li,{children:"u-boot-with-spl-lpi4a-main.bin     8g version flashing"}),"\n",(0,l.jsx)(n.li,{children:"u-boot-with-spl-lpi4a-16g-main.bin 16g version flashing"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"SBI Timestamp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"U-Boot SPL 2020.01-g69d7d3cd (Jan 31 2024 - 12:58:20 +0000)"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"U-Boot Timestamp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"U-Boot 2020.01-g69d7d3cd (Jan 31 2024 - 12:58:20 +0000)"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Kernel Commit ID"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"lpi4a: #2024.01.31.14.11+384c5e9e2"}),"\n",(0,l.jsx)(n.li,{children:"ahead: #2023.12.08.03.31+62225503f"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Version Timestamp (/etc/revyos-release)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"XFCE Desktop: 20240202-141632"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"system-and-desktop",children:"System and Desktop"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Supports DebianOS xfce4 desktop"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hardware-acceleration",children:"Hardware Acceleration"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"xfce4 desktop supports GPU acceleration and 2D acceleration"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"supported-applications",children:"Supported Applications"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"LibreOffice: 7.5.4~rc2-1"}),"\n",(0,l.jsx)(n.li,{children:"Supports GIMP: 2.10.34-1"}),"\n",(0,l.jsx)(n.li,{children:"Supports VLC: 3.0.18 (3.0.18-2revyos1)"}),"\n",(0,l.jsx)(n.li,{children:"Supports Parole: 4.18.0 (4.18.0-1revyos1)"}),"\n",(0,l.jsx)(n.li,{children:"Firefox not pre-installed: 118.0 (118.0.2-1revyos1)"}),"\n",(0,l.jsx)(n.li,{children:"Supports Chromium: 109.0 (109.0.5414.119-1revyos2)"}),"\n",(0,l.jsx)(n.li,{children:"Supports xfce4: 4.18 (pre-installed in xfce version)"}),"\n",(0,l.jsx)(n.li,{children:"Supports Python3: 3.11.4 (3.11.4-1)"}),"\n",(0,l.jsx)(n.li,{children:"Supports apt-get installation sources"}),"\n",(0,l.jsx)(n.li,{children:"Go not pre-installed: 1.19 (1.19~1+b1)"}),"\n",(0,l.jsx)(n.li,{children:"Rust not pre-installed: 1.70.0 (1.70.0+dfsg1-1)"}),"\n",(0,l.jsx)(n.li,{children:"GCC not pre-installed: 13 (13.2.0-4revyos1)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"kernel-related",children:"Kernel Related"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Kernel version number: 5.10.113-lpi4a #2024.01.31.14.11+384c5e9e2"}),"\n",(0,l.jsx)(n.li,{children:"Kernel version number: 5.10.113-ahead #2024.01.31.14.11+384c5e9e2"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hardware-related",children:"Hardware Related"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CPU maximum frequency 1.84GHz"}),"\n",(0,l.jsx)(n.li,{children:"Supports single HDMI output or HDMI/DSI dual output"}),"\n",(0,l.jsx)(n.li,{children:"Supports 2D acceleration"}),"\n",(0,l.jsx)(n.li,{children:"Supports WIFI/BT module RTL8723DS, both WI-FI and Bluetooth functions have been enabled"}),"\n",(0,l.jsx)(n.li,{children:"Supports fan speed adjustment function"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,l.jsx)(n.h3,{id:"existing-issues",children:"Existing Issues"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bluetooth function of WIFI/BT module RTL8723 is unavailable after reboot/sleep"}),"\n",(0,l.jsx)(n.li,{children:"AIC8800 is temporarily unavailable"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);