import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fieldsets: [
    {
      name: 'duration',
      title: 'End Date',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: ['Full Time', 'Part Time', 'Freelance'],
        layout: 'dropdown',
      },
      initialValue: 'Full Time',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Date',
      type: 'date',
      fieldset: 'duration',
      hidden: ({parent}) => parent?.current,
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          // @ts-ignore
          if (context.parent?.current) {
            return true
          }
          return endDate ? true : 'End date is required'
        }),
    }),
    defineField({
      name: 'current',
      title: 'Current',
      description: 'Currently working here',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
      fieldset: 'duration',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'string'}],
    }),
  ],
})
