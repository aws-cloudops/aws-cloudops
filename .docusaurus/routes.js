import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'baf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b54'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '32e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '65c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c07'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5fa'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '50f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'bf4'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '3f1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '560'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'a5c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '597'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a56'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7ad'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '29b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '950'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '7c6'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e6b'),
    exact: true
  },
  {
    path: '/foo',
    component: ComponentCreator('/foo', '143'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '66a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2e0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '44f'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/about',
            component: ComponentCreator('/docs/tags/about', 'a1e'),
            exact: true
          },
          {
            path: '/docs/tags/philosophy',
            component: ComponentCreator('/docs/tags/philosophy', '35e'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f22'),
            routes: [
              {
                path: '/docs/category/modules',
                component: ComponentCreator('/docs/category/modules', 'dd3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/modules/linux',
                component: ComponentCreator('/docs/modules/linux', '0fd'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/outline',
                component: ComponentCreator('/docs/outline', 'ad1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/philosophy',
                component: ComponentCreator('/docs/philosophy', '553'),
                exact: true,
                sidebar: "mySidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f06'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
