export default {
  name: 'style',
  title: 'Style',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
            { value: "CSS", title: "CSS" },
            { value: "SCSS", title: "SCSS" }
        ],
        layout: 'radio',
      },
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
  ]
}