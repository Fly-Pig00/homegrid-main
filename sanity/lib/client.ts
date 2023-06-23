import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
  LithionToken,
  LithionProjectId,
} from "../env";

import {
  homePageQuery,
  aboutPageQuery,
  pressPageQuery,
  productPageQuery,
  productLinksQuery,
  brandsQuery,
  distributorsQuery,
  salesMapsQuery,
  pressQuery,
  videosQuery,
  articlesQuery,
  downloadsQuery,
  faqQuery,
  careersQuery,
  socialsQuery,
} from "./queries";

import {
  HomePagePayload,
  AboutPagePayload,
  PressPayload,
  ProductsPayload,
  BrandsPayload,
  SubMenuLinks,
  Distributors,
  SalesMaps,
  Press,
  Videos,
  Downloads,
  Faq,
  Careers,
  Socials,
} from "../types";

export const client = (brand: string) =>
  createClient({
    projectId: brand === "lithion" ? LithionProjectId : projectId,
    dataset,
    apiVersion,
    useCdn,
    token: brand === "lithion" ? LithionToken : token,
  });

export async function getHomePage(): Promise<HomePagePayload | undefined> {
  return await client("homegrid")?.fetch(homePageQuery);
}

export async function getAboutPage(): Promise<AboutPagePayload | undefined> {
  return await client("homegrid")?.fetch(aboutPageQuery);
}

export async function getProductLinks(): Promise<SubMenuLinks[] | []> {
  return await client("homegrid")?.fetch(productLinksQuery);
}

export async function getProductPage(
  slug: string
): Promise<ProductsPayload | undefined> {
  return await client("homegrid")?.fetch(productPageQuery(slug));
}

export async function getPressPage(): Promise<PressPayload | undefined> {
  return await client("homegrid")?.fetch(pressPageQuery);
}

export const getBrands = async (): Promise<BrandsPayload | undefined> => {
  return await client("lithion")?.fetch(brandsQuery);
};

export const getDistributors = async (): Promise<
  Distributors[] | undefined
> => {
  return await client("homegrid")?.fetch(distributorsQuery);
};

export const getSalesMaps = async (): Promise<SalesMaps | undefined> => {
  return await client("homegrid")?.fetch(salesMapsQuery);
};

export const getPress = async (): Promise<Press[] | undefined> => {
  return await client("homegrid")?.fetch(pressQuery);
};

export const getArticles = async (slug: string): Promise<Press | undefined> => {
  return await client("homegrid")?.fetch(articlesQuery(slug));
};

export const getVideos = async (): Promise<Videos[] | undefined> => {
  return await client("homegrid")?.fetch(videosQuery);
};

export const getDownloads = async (): Promise<Downloads[] | undefined> => {
  return await client("homegrid")?.fetch(downloadsQuery);
};

export const getFaqs = async (): Promise<Faq[] | undefined> => {
  return await client("homegrid")?.fetch(faqQuery);
};

export const getCareers = async (): Promise<Careers[] | undefined> => {
  return await client("homegrid")?.fetch(careersQuery);
};

export const getSocials = async (): Promise<Socials[] | []> => {
  return await client("homegrid")?.fetch(socialsQuery);
};
