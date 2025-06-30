import {defineType} from 'sanity'
import { blockContentBase } from './blockContentBaseTypes'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [...blockContentBase],
})