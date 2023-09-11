// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DAVIGO Wiki',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.davigogame.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Davigo-Studio', // Usually your GitHub org/user name.
  projectName: 'govigedit-docs-new', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'govigedit',
          path: 'govigedit',
          routeBasePath: 'govigedit',
          sidebarPath: require.resolve('./govigedit/sidebars.js'),
          editUrl:
            'https://github.com/Davigo-Studio/govigedit-docs-new/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./wiki/sidebars.js'),
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DAVIGO',
        // logo: {
        //   alt: 'Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            href: '/govigedit',
            label: 'DAVIGO Map Editor',
            position: 'left',
          },
          {
            href: '/wiki',
            label: 'Wiki',
            position: 'left',
          },
          {
            href: 'https://discord.gg/davigo',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://davigogame.com/govigedit-uploader-latest',
            label: 'Map Uploader',
            position: 'right',
          },
          {
            href: 'https://davigogame.com/govigedit-package-latest',
            label: 'Map Editor Package',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Davigo Studio. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
