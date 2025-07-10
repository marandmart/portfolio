// schemaTypes/blogBlockContentType.ts
import {defineType, defineArrayMember} from 'sanity'
import { blockContentBase } from './blockContentBaseTypes'

export default defineType({
  title: 'Blog Block Content',
  name: 'blogBlockContent',
  type: 'array',
  of: [
    ...blockContentBase,
    defineArrayMember({
      type: 'code',
      options: {
        withFilename: true,
      },
    }),
  ],
})