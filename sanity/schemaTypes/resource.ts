import { defineField, defineType } from 'sanity';

export const resourceType = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Ebook', value: 'ebook' },
          { title: 'Template', value: 'template' },
          { title: 'Canva', value: 'canva' },
          { title: 'Checklist', value: 'checklist' },
          { title: 'Guide', value: 'guide' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resourceUrl',
      title: 'Resource URL',
      type: 'url',
      description: 'External URL where the resource is hosted',
    }),
    defineField({
      name: 'canvaUrl',
      title: 'Canva URL',
      type: 'url',
      description: 'Canva editable template URL',
    }),
    defineField({
      name: 'downloadableFile',
      title: 'Downloadable File',
      type: 'file',
      description: 'Upload a PDF or other file directly',
    }),
    defineField({
      name: 'requiresEmail',
      title: 'Requires Email',
      type: 'boolean',
      initialValue: true,
      description: 'If true, users must enter their email to access this resource',
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
      title: 'title',
      type: 'type',
    },
    prepare(selection) {
      const { title, type } = selection;
      return {
        title,
        subtitle: type,
      };
    },
  },
});
