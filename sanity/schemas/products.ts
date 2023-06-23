import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const _featureSet = {
    name: '_featureSet',
    title: 'Set',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'featureImage',
            title: 'Image',
            description: "Ratio 1:1 square",
            type: 'image'
        },
        {
            name: 'featureText',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'datasheet',
            title: 'Data Sheet',
            type: 'file'
        },
    ]
}

export default  {
    name: "products",
    type: 'document',
    title: 'Products',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: "name",
            type: "string",
            title: 'Name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
        },
        {
            name: 'dataSheet',
            type: 'file',
            title: 'Data Sheet'
        },
        {
            name: 'accessories',
            title: 'Accessories',
            description: "Accessories/ add-ons for this product",
            type: 'array',
            of: [{
                type: '_featureSet',
            }]
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{
                type: '_featureSet',
            }]
        },
        {
            name: 'videoLinks',
            title: 'Video Links',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{

                type: 'image',
            }]
        },
        orderRankField({ type: "products" }),
    ]
}
