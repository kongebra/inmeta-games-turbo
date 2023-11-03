import { defineType } from "sanity";

export default defineType({
  name: "tournament",
  title: "Tournament",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "games",
      title: "Games",
      type: "array",
      of: [{ type: "game" }],
    },
  ],
});
