# RevyOS
[RevyOS](https://github.com/orgs/revyos/repositories)是由RuyiSDK团队的RevyOS小队支持开发的一款针对XuanTie芯片生态的Debian优化定制发行版。

__RevyOS__ 围绕玄铁C906、C910、C920、C908等芯片提供了完整而全面的适配和优化支持，默认集成支持玄铁扩展指令集和RVV 1.0的GCC工具链，并搭载使用RVV 1.0指令集优化过的Glibc和Kernel。

目前，__RevyOS__ 在办公、网页浏览、观看视频等方面已经能满足用户的基本使用需求。

基于上述定制和优化的 __RevyOS__，在 Lichee RV，Lichee Pi 4A 等硬件平台上，能够提供优秀的性能和极佳的体验。

# 文档说明
## exported functions 
`src/components/ImageLinks.tsx` 中包含所有适用的镜像最新版本和下载链接，引用最新版链接请使用 `mdx` 并使用相关函数（见： [此处用法](docs/intro.mdx)）

`src/components/LocaleImage.tsx` 中可以在 `en` 的 i18n 下使用 `file.en.ext` 的图片（如果存在），用法见[这里](i18n/en/docusaurus-plugin-content-docs/current/Installation/licheepi4a.mdx)，搜索 `<LocaleImage`

## mdx 文件
- 图片放在 `/static/img` 下，引用为 `/img/...`


# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Generate Translation
```
$ npm run write-translations -- --locale en
```

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
