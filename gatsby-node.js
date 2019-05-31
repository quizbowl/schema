/* eslint-env node */
const path = require(`path`);
const listTypes = require("./src/listTypes");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { groups, pageForType } = await listTypes(graphql);

  const component = path.resolve(`${__dirname}/src/components/typeTemplate.js`);
  for (const group of groups) {
    createPage({
      path: group.outputName,
      component,
      context: { group, pageForType }
    });
  }
};
