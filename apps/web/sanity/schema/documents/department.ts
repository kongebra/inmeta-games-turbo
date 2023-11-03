import { defineType } from "sanity";

export default defineType({
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
  // select: {
  //   title: "name",
  //   subtitle: "slug.current",
  // },
});
