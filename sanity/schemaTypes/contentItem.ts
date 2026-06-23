import { defineField, defineType } from 'sanity';

export const contentItemType = defineType({
  name: 'contentItem',
  title: 'Content Item',
  type: 'document',
  initialValue: () => ({
    featured: true,
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'contentClient' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Reel', value: 'reel' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'niche',
      title: 'Niche',
      type: 'reference',
      to: [{ type: 'contentNiche' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
      hidden: ({ document }) => document?.contentType !== 'photo',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      hidden: ({ document }) => document?.contentType !== 'reel',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: '9:16', value: '9:16' },
          { title: '16:9', value: '16:9' },
          { title: '1:1', value: '1:1' },
          { title: '4:5', value: '4:5' },
        ],
      },
      initialValue: '9:16',
      hidden: ({ document }) => document?.contentType !== 'reel',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'contentType',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle === 'photo' ? 'Photo' : 'Reel',
        media,
      };
    },
  },
});
