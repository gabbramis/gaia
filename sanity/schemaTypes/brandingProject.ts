import { defineArrayMember, defineField, defineType } from 'sanity';

export const brandingProjectType = defineType({
  name: 'brandingProject',
  title: 'Branding Project',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'client', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'visual-identity',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'palette',
      title: 'Palette',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'paletteColor',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'hex',
              title: 'Hex',
              type: 'string',
              validation: (rule) =>
                rule.required().regex(/^#(?:[0-9A-Fa-f]{3}){1,2}$/, {
                  name: 'hex color',
                }),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'hex',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'typography',
      title: 'Typography',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'typeface',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Serif', value: 'serif' },
                  { title: 'Sans Serif', value: 'sans-serif' },
                  { title: 'Monospace', value: 'monospace' },
                  { title: 'Display', value: 'display' },
                  { title: 'Script', value: 'script' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'type',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'mockups',
      title: 'Mockups',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(1).max(6),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(2020).max(2100),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'category',
      media: 'logo',
    },
  },
});
