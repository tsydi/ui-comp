export default {
  name: 'component',
  title: 'Component',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'string'
    },
    {
      name: 'updatedAt',
      title: 'UpdatedAt',
      type: 'date'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}