import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectSlide',
  title: 'Project Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})