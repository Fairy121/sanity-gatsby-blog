export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f37e919a068ce85ad28bac3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cioepmk4',
                  apiId: 'b8273b2d-be75-4866-9b55-86df2eb3371b'
                },
                {
                  buildHookId: '5f37e919fb8f78420ff53bbe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-22b5y2in',
                  apiId: '2f7083b8-8e05-443a-90a8-9f700ed43ebd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Fairy121/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-22b5y2in.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
