"use strict";(self.webpackChunkrevyos_docs_new=self.webpackChunkrevyos_docs_new||[]).push([[7478],{1120:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Changelog/lpi4a/20230810","title":"20230810","description":"System Version","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/Changelog/lpi4a/20230810.md","sourceDirName":"Changelog/lpi4a","slug":"/Changelog/lpi4a/20230810","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20230810","draft":false,"unlisted":false,"editUrl":"https://github.com/kagura114/revyos-docs-new/docs/Changelog/lpi4a/20230810.md","tags":[],"version":"current","frontMatter":{},"sidebar":"documentSidebar","previous":{"title":"20230614","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20230614"},"next":{"title":"20230916","permalink":"/revyos-docs-new/en/docs/Changelog/lpi4a/20230916"}}');var i=r(4848),l=r(8453);const t={},o="20230810",d={},c=[{value:"System Version",id:"system-version",level:2},{value:"Version Download",id:"version-download",level:2},{value:"Destructive Update",id:"destructive-update",level:2},{value:"Errors Encountered After Update",id:"errors-encountered-after-update",level:3},{value:"Desktop Environment Related",id:"desktop-environment-related",level:2},{value:"Supported Applications",id:"supported-applications",level:2},{value:"Kernel Related",id:"kernel-related",level:2},{value:"Hardware Related",id:"hardware-related",level:2},{value:"System Services",id:"system-services",level:2},{value:"Current Version Issues",id:"current-version-issues",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"20230810",children:"20230810"})}),"\n",(0,i.jsx)(n.h2,{id:"system-version",children:"System Version"}),"\n",(0,i.jsx)(n.p,{children:"RevyOS 20230810 Version"}),"\n",(0,i.jsx)(n.h2,{id:"version-download",children:"Version Download"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/20230810/",children:"RevyOS 20230810 lpi4a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"boot-20230810-222415.ext4"}),"\n",(0,i.jsx)(n.li,{children:"root-20230810-222415.ext4"}),"\n",(0,i.jsx)(n.li,{children:"u-boot-with-spl-lpi4a.bin     8G version needs to be flashed"}),"\n",(0,i.jsx)(n.li,{children:"u-boot-with-spl-lpi4a-16g.bin 16G version needs to be flashed"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"destructive-update",children:"Destructive Update"}),"\n",(0,i.jsx)(n.p,{children:"The boot process has been redesigned, so all partitions need to be reflashed."}),"\n",(0,i.jsx)(n.h3,{id:"errors-encountered-after-update",children:"Errors Encountered After Update"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Retrieving file: /dtbs/linux-image-5.10.113-lpi4a/<NULL>-light-c910.\nSkipping l0r for failure retrieving fdt\nLight LPI4A#\n\nWhen encountering this situation, you need to execute</br>\nenv default -a -f;env save;reset\n"})}),"\n",(0,i.jsx)(n.h2,{id:"desktop-environment-related",children:"Desktop Environment Related"}),"\n",(0,i.jsx)(n.p,{children:"The current version only provides support for xfce4 desktop."}),"\n",(0,i.jsx)(n.h2,{id:"supported-applications",children:"Supported Applications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"LibreOffice: 7.5.2 (7.5.2~rc2-1revyos1)"}),"\n",(0,i.jsx)(n.li,{children:"GIMP: 2.10.34 (2.10.34-1)"}),"\n",(0,i.jsx)(n.li,{children:"VLC: 3.0.18 (3.0.18-2)"}),"\n",(0,i.jsx)(n.li,{children:"Parole: 4.18.0 (4.18.0-1revyos1)"}),"\n",(0,i.jsx)(n.li,{children:"Chromium: 109.0 (109.0.5414.119-1revyos1)"}),"\n",(0,i.jsx)(n.li,{children:"xfce4: 4.18 (pre-installed in xfce version)"}),"\n",(0,i.jsx)(n.li,{children:"Python3: 3.11.2 (3.11.2-1+b1)"}),"\n",(0,i.jsx)(n.li,{children:"Firefox: not pre-installed 114.0 (114.0-1revyos1)"}),"\n",(0,i.jsx)(n.li,{children:"Code-OSS: not pre-installed 1.80.1 (1.80.1-1+electron23)"}),"\n",(0,i.jsx)(n.li,{children:"Go: not pre-installed 1.19.8 (1.19.8-2)"}),"\n",(0,i.jsx)(n.li,{children:"Rust: not pre-installed 1.65.0 (1.65.0+dfsg1-1~exp3)"}),"\n",(0,i.jsx)(n.li,{children:"GCC: not pre-installed 13 (13.1.0)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"kernel-related",children:"Kernel Related"}),"\n",(0,i.jsx)(n.p,{children:"Kernel commit ID: #2023.08.10.02.31+c130cdb21"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kernel version: 5.10.113 (2023.08.10.02.31+c130cdb21)"}),"\n",(0,i.jsx)(n.li,{children:"Added support for USB serial devices."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hardware-related",children:"Hardware Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maximum CPU frequency is 1.84GHz."}),"\n",(0,i.jsx)(n.li,{children:"Supports HDMI output."}),"\n",(0,i.jsx)(n.li,{children:"Supports WIFI/BT module RTL8723DS, both WI-FI and Bluetooth functions have been enabled."}),"\n",(0,i.jsx)(n.li,{children:"Supports fan speed control functions."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"system-services",children:"System Services"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Version timestamp (/etc/revyos-release) - xfce desktop: 20230810-222415"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"current-version-issues",children:"Current Version Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Does not support 2K resolution."}),"\n",(0,i.jsx)(n.li,{children:"Mouse dragging lag."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);