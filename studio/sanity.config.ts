import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {graphiQLTool} from 'sanity-plugin-graphiql'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'r62icpp0',
  dataset: 'production',

  plugins: [
    codeInput(),
    
    structureTool({
      structure: (S) =>
        S.list()
          .title('Mario\'s Portfolio Content')
          .id('content-list-pane')
          .items([
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ])
    }),
    visionTool(),
    graphiQLTool({
      name: 'graphql',
      title: 'GraphQL API',
      apiVersion: '2023-08-01',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
