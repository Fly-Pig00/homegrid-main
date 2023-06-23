// ./src/defaultDocumentNode.ts

import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
// import { SecretsManager } from './SecretsManager'
import { IFramePreviewView } from './IFramePreviewView'
import { SanityDocument, isRecord, isString, } from 'sanity'
import { previewSecretDocumentId } from '../env'
import { getPreviewSecret } from '../lib/previewSecret'
import { client } from '@/sanity/lib/client'

// Customise this function to show the correct URL based on the current document
async function getPreviewUrl(doc: SanityDocument) {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  const {_type, id} = doc
  const slug =  isRecord(doc.slug) && isString(doc.slug.current) ? doc.slug.current : undefined
  const secret = await getPreviewSecret({
    client: client("homegrid"),
    id: previewSecretDocumentId,
    createIfNotExists: true,
  })
  const path = `${domain}/api/preview?type=${_type}&id=${id}&slug=${slug ?? _type}&secret=${secret}`
  return path
}


export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc : SanityDocument) => getPreviewUrl(doc),
        defaultSize: 'desktop',
        reload: {
          button: true
        }
      })
      .title('Preview'),
    // S.view.component(SecretsManager).id('secrets').title('Secrets')
  ])
}