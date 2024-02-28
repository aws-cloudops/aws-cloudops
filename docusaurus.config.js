// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AWS CloudOps and Silver Lining',
    tagline: 'Start your career in cloud operations and engineering',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://www.aws-cloudops.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/dixonaws/aws-cloudops/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',

            navbar: {
                hideOnScroll: true,
                title: 'aws-cloudops',
                logo: {
                    alt: 'aws cloud ops logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        position: 'left',
                        label: 'Introduction',
                        docId: 'introduction/index',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'getting_started',
                        position: 'left',
                        label: 'Getting Started',
                        docId: 'getting_started/index',

                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'modules',
                        position: 'left',
                        label: 'Modules',
                        docId: 'modules/index',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'employers',
                        position: 'left',
                        label: 'For Employers',
                        docId: 'employers/index',
                    },
                    {
                        href: 'https://github.com/dixonaws/aws-cloudops',
                        label: 'Register Now!',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/dixonaws/aws-cloudops',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: false,
                },
            },
            footer: {
                style: 'dark',
                links: [

                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Philosophy',
                                to: '/docs/introduction/philosophy',
                            },
                            {
                                label: 'About Us',
                                to: '/docs/introduction/about',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/dixonaws/aws-cloudops/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Silver Lining`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
