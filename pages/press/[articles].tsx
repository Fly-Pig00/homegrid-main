import React from "react";
import { CustomPortableText } from "@/components/CustomPortableText";
import { Press } from "@/sanity/types";
import { getArticles, getPress } from "@/sanity/lib/client";

const Articles = ({ articles }: { articles: Press }) => {
  return (
    <div className="article page">
      <CustomPortableText value={articles?.body} />
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { articles: string };
}) => {
  const articles = await getArticles(params?.articles as string);
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths = async () => {
  const press = await getPress();
  const paths = press?.map(({ slug }, idx) => ({
    params: {
      articles: slug?.current ?? idx.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Articles;
