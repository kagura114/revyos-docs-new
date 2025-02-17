"use strict";(self.webpackChunkrevyos_docs_new=self.webpackChunkrevyos_docs_new||[]).push([[9619],{7128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"benchmark/reboot","title":"Restart Test","description":"Summary","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/benchmark/reboot.md","sourceDirName":"benchmark","slug":"/benchmark/reboot","permalink":"/revyos-docs-new/en/docs/benchmark/reboot","draft":false,"unlisted":false,"editUrl":"https://github.com/kagura114/revyos-docs-new/docs/benchmark/reboot.md","tags":[],"version":"current","frontMatter":{},"sidebar":"documentSidebar","previous":{"title":"p7zip","permalink":"/revyos-docs-new/en/docs/benchmark/p7zip"},"next":{"title":"Stream","permalink":"/revyos-docs-new/en/docs/benchmark/stream"}}');var r=n(4848),c=n(8453);const o={},i="Restart Test",a={},l=[{value:"Summary",id:"summary",level:2},{value:"Test Item Description",id:"test-item-description",level:2},{value:"Test Plan",id:"test-plan",level:2},{value:"Operating Steps",id:"operating-steps",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"restart-test",children:"Restart Test"})}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"Perform a restart test on the entire machine using a script."}),"\n",(0,r.jsx)(t.h2,{id:"test-item-description",children:"Test Item Description"}),"\n",(0,r.jsx)(t.p,{children:"Check if there are any issues such as freezing when the test machine is restarted."}),"\n",(0,r.jsx)(t.h2,{id:"test-plan",children:"Test Plan"}),"\n",(0,r.jsx)(t.p,{children:"Conduct restart tests 500 times."}),"\n",(0,r.jsx)(t.h2,{id:"operating-steps",children:"Operating Steps"}),"\n",(0,r.jsx)(t.p,{children:"Create a restart script named cycletest.service_ in /lib/system/system:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"[Unit]\nDescription=Reboots unit after 30s\n\n[Service]\nStandardOutput=syslog+console\nExecStart=/bin/sh -c \"\\\ntest -f /cycle-count || echo 0 > /cycle-count;\\\necho 'starting cycletest';\\\nsleep 30;\\\nexpr `cat /cycle-count` + 1 > /cycle-count;\\\nsystemctl reboot;\\\n\"\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then install and start the test with the following commands:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"systemctl daemon-reload\nsystemctl enable cycletest.service (enable the service to start on reboot)\nsystemctl start cycletest.service (start the service, should reboot in 30s)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);