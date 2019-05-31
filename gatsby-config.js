/* eslint-env node */
const fs = require("fs");
const { buildSchema } = require("graphql");
const { SchemaLink } = require("apollo-link-schema");
const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");

const sdl = fs.readFileSync(`${__dirname}/schema.graphql`).toString();
const schema = makeExecutableSchema({ typeDefs: sdl });
addMockFunctionsToSchema({ schema });

module.exports = {
  siteMetadata: {
    title: `Tournament Schema`,
    description: `API and schema documentation for describing tournaments.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/mdxTemplate.js")
        },
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Schema",
        fieldName: "schema",
        createLink: () => new SchemaLink({ schema }),
        createSchema: () => buildSchema(sdl)
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-51731100-2",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "xpx6pff"
        }
      }
    }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
