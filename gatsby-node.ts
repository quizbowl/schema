import { resolve } from "path";
import listTypes, { SchemaTypeGroup } from "./src/listTypes";
import { loadFiles } from "graphql-import-files";
import type { GatsbyNode } from "gatsby";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { graphql } from "graphql";

let latestGroups: SchemaTypeGroup[] = [];
let latestPagesForTypes: Record<string, string> = {};
let hasCreatedPages = false;

const nodeID = "updated-schema-id";

const contents: GatsbyNode = {
  async sourceNodes({ actions: { createNode }, reporter }) {
    reporter.info("Source nodes");
    let seq = 1;

    async function processSchemaFile() {
      reporter.info("Processing schema files…");
      const typeDefs = loadFiles(`./schema/*.graphql`);
      const schema = makeExecutableSchema({ typeDefs });
      const schemaWithMocks = addMocksToSchema({ schema });

      async function runQuery(queryString: string) {
        return await graphql({ schema: schemaWithMocks, source: queryString });
      }

      const { groups, pageForType } = await listTypes(runQuery);
      latestGroups = groups;
      latestPagesForTypes = pageForType;
      createNode({
        id: nodeID,
        internal: {
          type: "UpdatedSchema",
          contentDigest: `${seq}`,
          ignoreType: true,
        },
      });
      seq += 1;
    }

    processSchemaFile();
  },
  async createPages({
    actions: { createPage, deletePage },
    getNodeAndSavePathDependency,
  }) {
    const templatePath = resolve(
      `${__dirname}/src/components/typeTemplate.tsx`
    );
    for (const group of latestGroups) {
      const page = {
        path: group.outputName,
        component: templatePath,
      };
      if (hasCreatedPages) {
        deletePage(page);
      }
      createPage({
        ...page,
        context: { group, pageForType: latestPagesForTypes },
      });
      getNodeAndSavePathDependency(nodeID, group.outputName);
    }
    hasCreatedPages = true;
  },
};

export const createPages = contents.createPages;
export const sourceNodes = contents.sourceNodes;
