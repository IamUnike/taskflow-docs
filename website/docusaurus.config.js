// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaskFlow',
  tagline: 'Build task management into your applications.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production site URL.
  // We will update this properly during deployment.
  url: 'https://IamUnike.github.io',

  // Serve the site from the root path.
  baseUrl: '/taskflow-docs/',

  // GitHub repository details.  
  organizationName: 'IamUnike',
  projectName: 'taskflow-docs',


  onBrokenLinks: 'throw',

  trailingSlash: false,

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
          sidebarPath: './sidebars.js',

          // Make the documentation the root of the website.
          routeBasePath: '/',

          // Link "Edit this page" to your repository.
          editUrl:
            'https://github.com/IamUnike/taskflow-docs/tree/main/website/',
        },

        // Disable the Docusaurus blog.
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'TaskFlow',

        logo: {
          alt: 'TaskFlow Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/IamUnike/taskflow-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TaskFlow. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;