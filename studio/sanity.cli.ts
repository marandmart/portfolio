import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'r62icpp0',
    dataset: 'production'
  },
  graphql: [{
    playground: true,
    workspace: 'production',
    id: 'r62icpp0'
  }]
})
