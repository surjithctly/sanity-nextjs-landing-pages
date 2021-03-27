export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605ee0a569e55d2333f1cbc8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t3gr4817',
                  apiId: 'e7bcc548-40c0-4e6b-a91a-304405a67538'
                },
                {
                  buildHookId: '605ee0a5c78bfb0932a56ae3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4wiiyr7x',
                  apiId: '2cf04159-c6c8-4a2f-9670-a4e5a810ea64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/surjithctly/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4wiiyr7x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
