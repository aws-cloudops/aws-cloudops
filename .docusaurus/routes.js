import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '9b5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b1a'),
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
            component: ComponentCreator('/docs', '4d2'),
            routes: [
              {
                path: '/docs/employers/',
                component: ComponentCreator('/docs/employers/', 'e0f'),
                exact: true,
                sidebar: "employers"
              },
              {
                path: '/docs/getting_started/',
                component: ComponentCreator('/docs/getting_started/', '22c'),
                exact: true,
                sidebar: "getting_started"
              },
              {
                path: '/docs/getting_started/learning_roadmap',
                component: ComponentCreator('/docs/getting_started/learning_roadmap', 'ade'),
                exact: true,
                sidebar: "getting_started"
              },
              {
                path: '/docs/introduction/',
                component: ComponentCreator('/docs/introduction/', 'b77'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/about',
                component: ComponentCreator('/docs/introduction/about', '2c9'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/code-of-conduct',
                component: ComponentCreator('/docs/introduction/code-of-conduct', '224'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/getting-involved',
                component: ComponentCreator('/docs/introduction/getting-involved', 'fac'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/philosophy',
                component: ComponentCreator('/docs/introduction/philosophy', '1fa'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/modules/',
                component: ComponentCreator('/docs/modules/', 'fe2'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/cloud/',
                component: ComponentCreator('/docs/modules/cloud/', 'e8d'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/cloud/automation',
                component: ComponentCreator('/docs/modules/cloud/automation', 'aea'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/cloud/monitoring',
                component: ComponentCreator('/docs/modules/cloud/monitoring', 'bed'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/cloud/security',
                component: ComponentCreator('/docs/modules/cloud/security', '9d1'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/',
                component: ComponentCreator('/docs/modules/fundamentals/', 'f75'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/advanced_linux',
                component: ComponentCreator('/docs/modules/fundamentals/advanced_linux', 'ada'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/linux',
                component: ComponentCreator('/docs/modules/fundamentals/linux', '76a'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/networking_in_aws',
                component: ComponentCreator('/docs/modules/fundamentals/networking_in_aws', 'b8a'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/storage',
                component: ComponentCreator('/docs/modules/fundamentals/storage', 'a4f'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/fundamentals/tier_apps',
                component: ComponentCreator('/docs/modules/fundamentals/tier_apps', '302'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/pro_skills/',
                component: ComponentCreator('/docs/modules/pro_skills/', 'cbe'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/pro_skills/customer',
                component: ComponentCreator('/docs/modules/pro_skills/customer', '828'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/pro_skills/resume_interview_prep',
                component: ComponentCreator('/docs/modules/pro_skills/resume_interview_prep', 'bd1'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/specialization/',
                component: ComponentCreator('/docs/modules/specialization/', '7d7'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/specialization/big_data',
                component: ComponentCreator('/docs/modules/specialization/big_data', '4cf'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/specialization/containers',
                component: ComponentCreator('/docs/modules/specialization/containers', '36f'),
                exact: true,
                sidebar: "modules"
              },
              {
                path: '/docs/modules/specialization/genai',
                component: ComponentCreator('/docs/modules/specialization/genai', '925'),
                exact: true,
                sidebar: "modules"
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
