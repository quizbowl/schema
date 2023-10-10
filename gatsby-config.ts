import type { GatsbyConfig } from "gatsby";
import { version } from "./package.json";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tournament Schema`,
    siteUrl: `https://schema.quizbowl.technology`,
    description: `API and schema documentation for describing tournaments.`,
    version,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
