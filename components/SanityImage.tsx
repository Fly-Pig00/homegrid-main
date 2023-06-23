import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import sanityApiClient from "@/utils/sanityClient";
import React, { forwardRef, ForwardedRef } from "react";
import { SanityImageAsset } from "@/sanity/types";

const SanityImage = forwardRef<HTMLImageElement, SanityImageAsset>(
  (
    { asset, fill, onClick }: SanityImageAsset,
    ref?: ForwardedRef<HTMLImageElement>
  ) => {
    const imageProps = useNextSanityImage(sanityApiClient, asset ?? {});

    if (!imageProps) return null;

    return (
      <Image
        {...imageProps}
        ref={ref}
        onClick={onClick}
        src={asset?.url ?? imageProps?.src}
        alt={`${asset?._ref}`}
        className={`${fill ? "object-cover" : "object-contain"} w-full h-full`}
      />
    );
  }
);

SanityImage.displayName = "SanityImage";

export default SanityImage;
