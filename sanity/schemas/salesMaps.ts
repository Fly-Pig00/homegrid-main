import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'


export const salesReps = {
    name: "salesReps",
    title: 'Sales Reps',
    type: 'object',
    // orderings: [orderRankOrdering],
    fields: [
        {
            name: "name",
            title: 'Name',
            type: "string",
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'regionColor',
            title: 'Region Color (Hex Code)',
            type: 'string',
        },
        // orderRankField({ type: "salesReps" }),
    ]
}

export default  {
  name: "salesMaps",
  title: 'Sales Maps',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
      {
          name: "name",
          title: 'Name',
          type: "string",
      },
      {
          name: "interactiveMapLink",
          title: 'interactive Map Link',
          type: "string",
      },
      {
          name: 'mapImage',
          title: 'Map Image',
          type: 'file',
        //   validation: 'required'
      },
      {
          name: 'salesReps',
          title: 'Sales Reps',
          type: 'array',
          of: [{
            type: 'salesReps'
          }]
      },
      orderRankField({ type: "salesMaps" }),
  ]
}