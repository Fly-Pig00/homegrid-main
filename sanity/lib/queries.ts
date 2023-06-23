import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "home"][0]`;
export const aboutPageQuery = groq`*[_type == "about"][0]`;
export const pressPageQuery = groq`*[_type == "press"][0]`;

export const productLinksQuery = groq`*[_type == "products"]{
  name, slug
}`;
export const productPageQuery = (
  slug: string
) => groq` *[_type == 'products' && slug.current == "${slug}"][0]{
  ...,
    gallery[]{
      ...,
      asset->{
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height,
        url,
        _id,
      }
    }
}`;

export const careersPageQuery = groq`*[_type == "careers"][0]`;

export const _hero = groq`*[_type == "_hero"]`;

export const _partners = groq`*[_type == "_partners"]`;

export const faqPageQuery = groq`*[_type == "faq"][0]`;

export const downloadsPageQuery = groq`*[_type == "downloads"][0]`;

export const distributorsQuery = groq`*[_type == "distributors"]`;

export const salesMapsQuery = groq`*[_type == "salesMaps"]{
  ...,
  mapImage{
    "url": asset->url,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
  }
}`;

export const socialsPageQuery = groq`*[_type == "socials"]`;

export const pressQuery = groq`*[_type == "press" && published == true]`;

export const articlesQuery = (slug: string) =>
  groq`*[_type == "press" && slug.current == "${slug}"][0]`;

export const videosQuery = groq`*[_type == "videos"]`;

export const downloadsQuery = groq`*[_type == "downloads"]{
  ...,
  files[]{
    ...,
    "file": file.asset->url,
  }
}`;

export const brandsQuery = groq`*[_type == "brands"]{
  ...,
  regularLogo{
    "url": asset->url,
  },
  whiteLogo{
    "url": asset->url,
  }
}`;

export const faqQuery = groq`*[_type == "faq"] | order(orderRank asc)`;

export const careersQuery = groq`*[_type == "careers"]`;

export const socialsQuery = groq`*[_type == "socials"]`;
