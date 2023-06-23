import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { SubMenuLinks } from "@/sanity/types";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import PreviewWrapper from "@/components/PreviewWrapper";
import { getProductLinks, getProductPage } from "@/sanity/lib/client";
import SanityImage from "@/components/SanityImage";
import { getFile } from "@sanity/asset-utils";
import { projectId, dataset } from "@/sanity/env";
import { GetStaticPaths, GetStaticProps } from "next";
import { productPageQuery } from "@/sanity/lib/queries";
import { ProductsPayload } from "@/sanity/types";

const Product = ({
  product,
  preview,
  query,
}: {
  product: ProductsPayload;
  preview: boolean;
  query: string;
}) => {
  return (
    <PreviewWrapper preview={preview} query={query}>
      <ProductPage data={product} />
    </PreviewWrapper>
  );
};

const ProductPage = ({ data }: { data: ProductsPayload }) => {
  return (
    <div className="product page">
      <MainDescriptions data={data} />
      <Accessories data={data} />
      <Features data={data} />
      <Videos data={data} />
      <GallerySection data={data} />
    </div>
  );
};

const MainDescriptions = ({ data }: { data: ProductsPayload }) => {
  const fileUrl = getFile(data?.dataSheet?.asset, { projectId, dataset }).asset
    .url;
  return (
    <div className="product__main">
      <div className="product__mainImg">
        <SanityImage
          asset={data?.mainImage}
          alt={`${data?.name} main image`}
          fill={true}
        />
      </div>
      <div className="product__mainDescription">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <div className="product__mainDescription--details">
          <PortableText value={data?.details} />
        </div>
        <Link href={fileUrl} target="_blank">
          Specifications
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={14}
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Accessories = ({ data }: { data: ProductsPayload }) => {
  // const { accessories } = data;
  return (
    <>
      {data?.accessories!?.length > 0 && (
        <div className="product__features max-w-3xl mx-auto">
          <h2>accessories</h2>
          <div className="grid sm:grid-cols-2 gap-5 xl:gap-10">
            {data?.accessories?.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="relative h-60">
                    {/* <Image priority fill
                      src={`${item.featureImage.asset.url}`}
                      alt={`HomeGrid ${name} features`}
                      className="object-contain"
                    /> */}
                    {item?.featureImage?.asset && (
                      <SanityImage
                        asset={item?.featureImage}
                        alt={`${item.title} feature image`}
                      />
                    )}
                  </div>
                  <h4 className="mt-5 font-medium">{item.title}</h4>
                  <p className="mb-5">{item.featureText}</p>
                  {item.datasheet && (
                    <Link
                      href={`${
                        getFile(item.datasheet.asset, { projectId, dataset })
                          .asset.url
                      }`}
                      target="_blank"
                      className="hover:text-accent group flex justify-end font-bold"
                    >
                      Specifications
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width={14}
                        className="group-hover:fill-accent ml-2"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const Features = ({ data }: { data: ProductsPayload }) => {
  // const {features} = data
  return (
    <div className="product__features">
      <h2>features</h2>
      {data?.features?.map((feat, idx) => {
        return (
          <div className="product__featuresDescription" key={idx}>
            <div className="product__featuresImg">
              <SanityImage
                asset={feat?.featureImage}
                alt={`feature ${idx} image`}
                fill
              />
            </div>
            <p>{feat.featureText}</p>
          </div>
        );
      })}
    </div>
  );
};

const Videos = ({ data }: { data: ProductsPayload }) => {
  return (
    <div className={`mb-10 max-w-[800px] mx-auto`}>
      {data?.videoLinks?.map((url) => {
        return (
          <div key={url} className="h-48 sm:h-96 lg:h-[400px] mb-5">
            <iframe
              src={url}
              title="HG Video"
              allowFullScreen
              className="flex-1 w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

const GallerySection = ({ data }: { data: ProductsPayload }) => {
  return (
    <Gallery>
      <div className="grid sm:grid-cols-3 gap-2 max-w-[800px] mx-auto">
        {data?.gallery?.map(({ asset }, idx) => {
          const { url, width, height } = asset!;
          return (
            <Item
              original={url}
              thumbnail={url}
              width={width}
              height={height}
              alt={`${data?.name}-gallery-photo-${idx}`}
              key={idx}
            >
              {({ ref, open }) => (
                <div className="relative h-60 bg-secondary opacity-90 hover:opacity-100 rounded overflow-hidden">
                  <SanityImage
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    asset={asset}
                    alt={`feature ${idx} image`}
                    fill
                  />
                </div>
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productLinks = await getProductLinks();
  const paths = productLinks.map(({ slug }: SubMenuLinks) => {
    return {
      params: { product: slug?.current },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, preview = false } = context;
  const product = await getProductPage(params?.product as string);

  return {
    props: {
      product,
      preview,
      query: productPageQuery(params?.product as string),
    },
  };
};

export default Product;
