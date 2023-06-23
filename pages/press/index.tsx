import Link from "next/link";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Press, Videos } from "@/sanity/types";
import { getPress, getVideos } from "@/sanity/lib/client";
import { PortableTextObject } from "sanity";

const Press = ({ press, videos }: { press: Press[]; videos: Videos[] }) => {
  console.log(press);
  return (
    <div className="press page">
      <h1 className="text-center">Press</h1>
      <h2>Videos</h2>
      <div className="grid grid-rows-1 xl:grid-cols-3 sm:grid-cols-2 gap-4 pb-5">
        {videos?.map(({ title, url }) => {
          return (
            <div
              key={title}
              className="h-48 flex justify-center items-center bg-secondary"
            >
              <iframe
                src={url}
                title={title}
                allowFullScreen
                // width="560"
                // height="315"
                className="flex-1 w-full h-full"
              />
            </div>
          );
        })}
      </div>
      <h2>Articles</h2>
      <div className="press__thumbnail--container ">
        {press?.map(({ title, slug, link, body }, idx) => {
          const srcUrl = urlForImage(body[0] as PortableTextObject)?.url();
          console.log(body);
          return (
            <Link
              key={idx}
              className="press__thumbnail group "
              href={slug ? `/press/${slug.current}` : link}
              target={slug ? "" : "_blank"}
            >
              <div className="press__thumbnail--image">
                <Image
                  src={srcUrl ?? "/homegrid-logo.png"}
                  alt={srcUrl ?? "homegrid logo"}
                  className={`${
                    slug ? "object-cover" : "object-contain px-5"
                  } opacity-90 hover:opacity-100`}
                  fill
                />
              </div>
              <div className="flex">
                <h4 className="press__thumbnail--title">{title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const press = await getPress();
  const videos = await getVideos();

  const filteredForImageBlocks = press?.map((press) => {
    const newObj = { ...press };
    const imageBlock = press?.body?.filter((block) => block?._type === "image");
    newObj.body = imageBlock;
    return newObj;
  });

  return {
    props: {
      press: filteredForImageBlocks,
      videos,
    },
  };
};

export default Press;
