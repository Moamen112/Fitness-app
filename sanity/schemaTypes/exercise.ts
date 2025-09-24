import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  icon: () => '🏋️‍♂️',
  fields: [
    defineField({
      name: 'name',
      title: 'Exercise Name',
      description: 'The name of the exercise that will be displayed to users',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A detailed description explaining how to perform the exercise',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      description: 'The difficulty level of the exercise to help users',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Exercise Image',
      description: 'An image showing the proper from or demostration of the exercise',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Description of the exercise image for accessibility ans SEO purposes',
        },
      ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Url',
      description: 'A URL link to a video demonstration of the exercise',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      description: 'Toggle to show or hide this exercise from this app',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'difficulty',
      media: 'image',
    },
  },
})
