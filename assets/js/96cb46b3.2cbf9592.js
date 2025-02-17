"use strict";(self.webpackChunkrevyos_docs_new=self.webpackChunkrevyos_docs_new||[]).push([[5886],{8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var c=n(6540);const a={},t=c.createContext(a);function s(e){const i=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),c.createElement(t.Provider,{value:i},e.children)}},8554:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"build/debian/enable_optimization_gcc","title":"\u5982\u4f55\u542f\u7528 T-Head \u4f18\u5316 GCC","description":"\u5b9e\u9a8c\u6027 feature \u5982\u679c\u53d1\u73b0\u95ee\u9898\u53ef\u4ee5\u8fdb\u884cissue\u7533\u62a5","source":"@site/docs/build/debian/enable_optimization_gcc.md","sourceDirName":"build/debian","slug":"/build/debian/enable_optimization_gcc","permalink":"/revyos-docs-new/docs/build/debian/enable_optimization_gcc","draft":false,"unlisted":false,"editUrl":"https://github.com/kagura114/revyos-docs-new/docs/build/debian/enable_optimization_gcc.md","tags":[],"version":"current","frontMatter":{},"sidebar":"documentSidebar","previous":{"title":"Debian \u8f6f\u4ef6\u5305\u6784\u5efa\u6d41\u7a0b","permalink":"/revyos-docs-new/docs/build/debian/Debian\u8f6f\u4ef6\u5305\u6784\u5efa\u6d41\u7a0b"},"next":{"title":"\u7f16\u8bd1\u5668\u76f8\u5173\u8bf4\u660e","permalink":"/revyos-docs-new/docs/build/debian/\u7f16\u8bd1\u5668\u76f8\u5173\u8bf4\u660e"}}');var a=n(4848),t=n(8453);const s={},l="\u5982\u4f55\u542f\u7528 T-Head \u4f18\u5316 GCC",r={},d=[{value:"\u6d4b\u8bd5 gcc-10 (gcc10.4 \u542f\u7528xtheadc+v0p7)",id:"\u6d4b\u8bd5-gcc-10-gcc104-\u542f\u7528xtheadcv0p7",level:2},{value:"\u6d4b\u8bd5 gcc-13 (gcc13.2 \u542f\u7528xthead extension)",id:"\u6d4b\u8bd5-gcc-13-gcc132-\u542f\u7528xthead-extension",level:2},{value:"gcc-10/gcc-13 \u533a\u522b",id:"gcc-10gcc-13-\u533a\u522b",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"\u5982\u4f55\u542f\u7528-t-head-\u4f18\u5316-gcc",children:"\u5982\u4f55\u542f\u7528 T-Head \u4f18\u5316 GCC"})}),"\n",(0,a.jsxs)(i.p,{children:["\u5b9e\u9a8c\u6027 ",(0,a.jsx)(i.code,{children:"feature"})," \u5982\u679c\u53d1\u73b0\u95ee\u9898\u53ef\u4ee5\u8fdb\u884c",(0,a.jsx)(i.a,{href:"https://github.com/revyos/revyos/issues",children:"issue\u7533\u62a5"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"# \u589e\u52a0\u4f18\u5316\u6e90\nsudo sed -i '1ideb https://mirror.iscas.ac.cn/revyos/revyos-c910v/ revyos-c910v main' /etc/apt/sources.list\n# \u66f4\u65b0\u8f6f\u4ef6\nsudo apt update && sudo apt upgrade -y\n# \u5b89\u88c5 gcc-10/gcc-13\nsudo apt install -y build-essential gcc-13 g++-13\n# \u91cd\u542f\u907f\u514d\u5176\u4ed6\u95ee\u9898\nsudo reboot\n"})}),"\n",(0,a.jsx)(i.h2,{id:"\u6d4b\u8bd5-gcc-10-gcc104-\u542f\u7528xtheadcv0p7",children:"\u6d4b\u8bd5 gcc-10 (gcc10.4 \u542f\u7528xtheadc+v0p7)"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"gcc -v\nUsing built-in specs.\nCOLLECT_GCC=gcc\nCOLLECT_LTO_WRAPPER=/usr/lib/gcc/riscv64-linux-gnu/10/lto-wrapper\nTarget: riscv64-linux-gnu\nConfigured with: ../src/configure -v --with-pkgversion='Debian 10.4.0-8revyos2.3' --with-bugurl=file:///usr/share/doc/gcc-10/README.Bugs --enable-languages=c,ada,c++,go,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-10 --program-prefix=riscv64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/lib --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-libitm --disable-libsanitizer --disable-libquadmath --disable-libquadmath-support --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --disable-multilib --with-arch=rv64gcv0p7_zfh_xtheadc --with-abi=lp64d --enable-checking=release --build=riscv64-linux-gnu --host=riscv64-linux-gnu --target=riscv64-linux-gnu\nThread model: posix\nSupported LTO compression algorithms: zlib zstd\ngcc version 10.4.0 (Debian 10.4.0-8revyos2.3)\n"})}),"\n",(0,a.jsx)(i.h2,{id:"\u6d4b\u8bd5-gcc-13-gcc132-\u542f\u7528xthead-extension",children:"\u6d4b\u8bd5 gcc-13 (gcc13.2 \u542f\u7528xthead extension)"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"gcc-13 -v\nUsing built-in specs.\nCOLLECT_GCC=gcc-13\nCOLLECT_LTO_WRAPPER=/usr/libexec/gcc/riscv64-linux-gnu/13/lto-wrapper\nTarget: riscv64-linux-gnu\nConfigured with: ../src/configure -v --with-pkgversion='Debian 13.2.0-1revyos1' --with-bugurl=file:///usr/share/doc/gcc-13/README.Bugs --enable-languages=c,ada,c++,go,d,fortran,objc,obj-c++,m2 --prefix=/usr --with-gcc-major-version-only --program-suffix=-13 --program-prefix=riscv64-linux-gnu- --enable-shared --enable-linker-build-id --libexecdir=/usr/libexec --without-included-gettext --enable-threads=posix --libdir=/usr/lib --enable-nls --enable-clocale=gnu --enable-libstdcxx-debug --enable-libstdcxx-time=yes --with-default-libstdcxx-abi=new --enable-gnu-unique-object --disable-libitm --disable-libquadmath --disable-libquadmath-support --enable-plugin --enable-default-pie --with-system-zlib --enable-libphobos-checking=release --with-target-system-zlib=auto --enable-objc-gc=auto --enable-multiarch --disable-werror --disable-multilib --with-arch=rv64gc_zfh_xtheadba_xtheadbb_xtheadbs_xtheadcmo_xtheadcondmov_xtheadfmemidx_xtheadfmv_xtheadint_xtheadmac_xtheadmemidx_xtheadmempair_xtheadsync --with-abi=lp64d --enable-checking=release --build=riscv64-linux-gnu --host=riscv64-linux-gnu --target=riscv64-linux-gnu --with-build-config=bootstrap-lto-lean --enable-link-serialization=16\nThread model: posix\nSupported LTO compression algorithms: zlib zstd\ngcc version 13.2.0 (Debian 13.2.0-1revyos1)\n"})}),"\n",(0,a.jsx)(i.h2,{id:"gcc-10gcc-13-\u533a\u522b",children:"gcc-10/gcc-13 \u533a\u522b"}),"\n",(0,a.jsx)(i.p,{children:"\u9664\u4e86v0p7 \u5176\u4ed6\u4f18\u5316\u90fd\u53ef\u4ee5\u7528 gcc-13 \u4ee3\u66ff gcc-10"}),"\n",(0,a.jsx)(i.p,{children:"\u540e\u8005\u7684\u4f18\u5316\u53ef\u4ee5\u4e3b\u7ebf\u62a5\u95ee\u9898 \u662f\u5df2\u7ecf\u4e3b\u7ebf\u5316\u7684\u529f\u80fd"})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);