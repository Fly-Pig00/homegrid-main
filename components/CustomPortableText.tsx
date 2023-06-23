import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import SanityImage from "@/components/SanityImage";
import { SanityImageAsset } from "@/sanity/types";

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ImageComponent,
      columns: ColumnsComponent,
    },
  };
  return <PortableText components={components} value={value} />;
}

const ImageComponent = ({
  value,
}: {
  value: SanityImageAsset & { alt?: string; caption?: string };
}) => {
  return (
    <div className="space-y-2">
      <SanityImage asset={value} priority />
      {value?.caption && (
        <div className="font-sans text-sm text-gray-600">{value.caption}</div>
      )}
    </div>
  );
};

const ColumnsComponent = ({ value }: { value: any }) => {
  const columns = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
  ];
  return (
    <div className={`grid ${columns[value.columns.length - 1]} gap-4 relative`}>
      {value.columns.map((column: any, idx: number) => {
        return (
          <div key={idx}>
            <PortableText
              value={column.content}
              components={{
                types: {
                  block: ({ value }) => (
                    <div>
                      <p>{value}</p>
                    </div>
                  ),
                  image: ImageComponent,
                },
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
