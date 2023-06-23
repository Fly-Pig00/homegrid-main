import React, { useState } from "react";
import Link from "next/link";
import SearchDownloads from "@/components/SearchDownloads";
import { Downloads } from "@/sanity/types";
import { getDownloads } from "@/sanity/lib/client";

const Downloads = ({ downloads }: { downloads: Downloads[] }) => {
  const [filteredList, setFilteredList] = useState<Downloads[] | []>([
    ...downloads,
  ]);
  return (
    <div className="downloads page">
      <h1 className="text-center">Downloads</h1>
      <SearchDownloads original={downloads} setFiltered={setFilteredList} />
      {filteredList.length === 0 ? (
        <h3>Sorry, no results found!</h3>
      ) : (
        filteredList.map((list, idx) => {
          return (
            <div key={idx} className="downloads__category">
              <h3 className="downloads__category--title">{list?.category}</h3>
              {list?.files?.map(({ linkName, link, file }, idx) => {
                return (
                  <Link
                    href={`${link ?? file}` ?? "#"}
                    className="downloads__link"
                    key={idx}
                    target="_blank"
                  >
                    {linkName}
                  </Link>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const downloads = await getDownloads();
  return {
    props: {
      downloads,
    },
  };
};

export default Downloads;
