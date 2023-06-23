import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {schemaTypes} from './sanity/schema';
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import { defaultDocumentNode } from './sanity/components/defaultDocumentNode';
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: "/studio",
  name: 'Homegrid_Studio',
  title: 'Homegrid Content Manager',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S, context)=> {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'faq', S, context}),
            orderableDocumentListDeskItem({type: 'salesMaps', S, context}),
            orderableDocumentListDeskItem({type: 'products', S, context}),
            orderableDocumentListDeskItem({type: 'downloads', S, context}),
            orderableDocumentListDeskItem({type: 'videos', S, context}),
            ...S.documentTypeListItems(),

            // // Optional configuration
            // orderableDocumentListDeskItem({
            //     type: 'project',
            //     title: 'Projects',
            //     icon: Paint,
            //     // Required if using multiple lists of the same 'type'
            //     id: 'orderable-en-projects',
            //     // See notes on adding a `filter` below
            //     filter: `__i18n_lang == $lang`,
            //     params: {
            //         lang: 'en_US'
            //     },
            //     // pass from the structure callback params above
            //     S, 
            //     context
            // }),
          ])
      },
      defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
})
