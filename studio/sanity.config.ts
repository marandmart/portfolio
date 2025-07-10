import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {graphiQLTool} from 'sanity-plugin-graphiql'

import './styles/studio-overrides.css'

const devPlugins = isDev ? [graphiQLTool({
      name: 'graphql',
      title: 'GraphQL API',
      apiVersion: '2023-08-01',
    })] : [];

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
            S.documentTypeListItem('experience').title('Experience'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ])
    }),
    visionTool(),
    ...devPlugins,
  ],

  schema: {
    types: schemaTypes,
  },
})
