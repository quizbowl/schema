/* eslint-env node */
const path = require(`path`);
const listTypes = require("./src/listTypes");
const { importSchema } = require("graphql-import");

const fs = require("fs");
const debounce = require("debounce");
const { graphql } = require("graphql");
const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");

let latestGroups = [];
let latestPagesForTypes = {};
let hasCreatedPages = false;

const nodeID = "updated-schema-id";

exports.sourceNodes = options => {
  const {
    reporter,
    actions: { createNode }
  } = options;
  const schemaPath = path.resolve(__dirname, "schema");
  if (!fs.existsSync(schemaPath)) {
    reporter.panic(`Schema path ${schemaPath} doesn't exist.`);
  }

  let seq = 1;

  async function processSchemaFile() {
    reporter.info("Processing schema…");
    const sdl = importSchema(path.resolve(schemaPath, "index.graphql"));
    const schemaData = makeExecutableSchema({ typeDefs: sdl });
    addMockFunctionsToSchema({ schema: schemaData });
    const { groups, pageForType } = await listTypes(
      queryString => graphql(schemaData, queryString),
      ""
    );
    latestGroups = groups;
    latestPagesForTypes = pageForType;
    createNode({
      id: nodeID,
      parent: null,
      children: [],
      internal: {
        type: `UpdatedSchema`,
        contentDigest: `${seq}`,
        ignoreType: true
      }
    });
    seq += 1;
  }

  processSchemaFile();
  fs.watch(schemaPath, debounce(processSchemaFile, 200));
};

exports.createPages = async ({
  actions: { createPage, deletePage },
  getNodeAndSavePathDependency
}) => {
  const component = path.resolve(`${__dirname}/src/components/typeTemplate.js`);
  for (const group of latestGroups) {
    const page = {
      path: group.outputName,
      component
    };
    if (hasCreatedPages) {
      deletePage(page);
    }
    createPage({
      ...page,
      context: { group, pageForType: latestPagesForTypes }
    });
    getNodeAndSavePathDependency(nodeID, group.outputName);
  }
  hasCreatedPages = true;
};
