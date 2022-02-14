export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620ac7bf53e73a951e47c6a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vysb5kyf',
                  apiId: 'e66e279a-9393-4181-a779-8c9dd9e16dac'
                },
                {
                  buildHookId: '620ac7c0f272469663cdedd0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nwtgs79u',
                  apiId: '9017e40b-1d4b-466c-8d22-2966618fe06a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kwing25/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nwtgs79u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
