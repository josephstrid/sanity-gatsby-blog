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
                  buildHookId: '5dffb4c68bf26466ae862952',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-v94a75qa',
                  apiId: '83779ca9-4e84-4579-a767-3e8381c3d023'
                },
                {
                  buildHookId: '5dffb4c7c739e9197741e264',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9bqbs1fi',
                  apiId: '4ac2d888-b123-4114-90eb-c9d6751aac14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josephstrid/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9bqbs1fi.netlify.com', category: 'apps' }
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
