import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RevyOS Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kagrua114.github.io', // FIXME
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/revyos-docs-new',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kagura114', // Usually your GitHub org/user name.
  projectName: 'revyos-docs-new', // Usually your repo name.

  onBrokenLinks: 'throw', //FIXME: production 最好别用
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kagura114/revyos-docs-new', // FIXME
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'RevyOS Docs',
      logo: {
        alt: 'RevyOS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentSidebar',
          position: 'left',
          label: "文档",
        },
        {
          href: '/docs/issue',
          label: '提交问题与已知问题',
          position: 'left',
        },
        {
          href: 'https://github.com/revyos/revyos',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '镜像刷写',
          items: [
            {
              label: 'Installation Overview',
              to: '/docs/Installation/intro',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/revyos/revyos',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RevyOS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
