import type { PortableTextBlock } from "sanity";
import type { Image } from "sanity";
import { SanityFileSource } from "@sanity/asset-utils";
export interface SubMenuLinks {
  name?: string;
  slug?: {
    current: string;
  };
  _id?: string;
}
export interface AboutPagePayload {
  descriptionSet: {
    title: string;
    description: string;
    image?: Image;
  }[];
}

export interface HomePagePayload {
  hero: {
    slogan: string;
    image: Image;
    link: string;
  };
  featureProduct: {
    slug: string;
    copy: string;
    image: Image;
  };
  partners: {
    name: string;
    link: string;
    logo: Image;
  }[];
}

export interface CareersPayload {
  position: string;
  description: string;
}

export interface PartnersPayload {
  name: string;
  logo: Image;
}

export interface PressPayload {
  title: string;
  slug: string;
  link: string;
  published: boolean;
  body: PortableTextBlock[];
}

export interface ProductsPayload {
  name: String;
  description: String;
  details: PortableTextBlock[];
  mainImage?: SanityImageAsset;
  dataSheet: {
    asset: SanityFileSource;
  };
  accessories?: {
    title: string;
    featureText: String;
    featureImage: SanityImageAsset;
    datasheet?: {
      asset: SanityFileSource;
    };
  }[];
  features?: {
    featureText: String;
    featureImage: SanityImageAsset;
  }[];
  videoLinks: string[];
  gallery: SanityImageAsset[];
}

export interface CaseStudiesPayload {
  title: string;
  slug: string;
  published: boolean;
  body: PortableTextBlock[];
}

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _key: string;
}

export interface SanityImageAsset {
  url?: string | undefined;
  asset?: {
    _ref?: string | undefined;
    _type?: string;
    url?: string | undefined;
    width?: number;
    height?: number;
  };
  fill?: boolean;
  alt?: string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  priority?: boolean;
}

export interface BrandsPayload {
  name: string;
  link: string;
  regularLogo: SanityImageAsset;
  whiteLogo: SanityImageAsset;
}

export interface Distributors {
  name: string;
  address: string;
  lat: number;
  lng: number;
  link: string;
}
export interface SalesMaps {
  name: string;
  interactiveMapLink: string;
  mapImage: {
    url: string;
    width?: number;
    height?: number;
  };
  salesReps: {
    name: string;
    email: string;
    phone: string;
    regionColor: string;
  }[];
}

export interface Press {
  title: string;
  slug: {
    current: string;
  };
  link: string;
  body: PortableTextBlock[];
}

export interface Videos {
  title: string;
  url: string;
}

export interface Downloads {
  category: string;
  files: {
    linkName: string;
    link?: string;
    file?: string;
  }[];
}

export interface Faq {
  section: string;
  questionAnswer: {
    question: string;
    answer: PortableTextBlock[];
  }[] | [];
}

export interface Careers {
  position: string;
  description: PortableTextBlock[];
}

export interface Socials {
  name: string;
  url: string;
}
