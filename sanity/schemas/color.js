export default {
  name: "color",
  title: "Color",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
            { value: "Hex", title: "Hex" },
            { value: "RGB", title: "RGB" }
        ],
        layout: 'radio'
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string"
    },
  ],
};