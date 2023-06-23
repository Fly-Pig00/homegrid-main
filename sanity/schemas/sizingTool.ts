export default {
  name: "sizingTool",
  title: 'Sizing Tool',
  type: 'document',
  fields: [
      {
          name: 'Title',
          title: 'Title',
          type: 'string',
      },
      {
          name: 'body',
          title: 'Body Text',
          type: 'array',
          of: [{type: "block"},{type: 'image'}]
      },
  ]
}