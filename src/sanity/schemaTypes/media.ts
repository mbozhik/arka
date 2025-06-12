import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Медиа',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      type: 'object',
      fields: [
        {
          name: 'name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      type: 'string',
      description: 'Media can occupy 1 or 2 columns in the grid (standard/extended)',
      options: {
        list: [
          {title: 'Standard', value: '1'},
          {title: 'Extended', value: '2'},
        ],
      },
      initialValue: '1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
