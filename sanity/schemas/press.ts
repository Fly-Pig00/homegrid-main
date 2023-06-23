import customBlock from "./customBlock";

export default {
  name: "press",
  title: "Press",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "For internal articles",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      description: "link to external articles",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: customBlock
    },
  ],
};