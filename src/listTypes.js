/* eslint-env node */
function toInitialLowerCase(string) {
  return string[0].toLowerCase() + string.slice(1);
}

module.exports = async function listTypes(graphql) {
  const result = await graphql(`
    {
      __schema {
        types {
          ...TypeFields
          description
          fields {
            name
            description
            type {
              ...TypeFields
            }
          }
        }
      }
    }

    fragment EnumFields on __EnumValue {
      name
      description
    }

    fragment TypeFields on __Type {
      name
      kind
      enumValues {
        ...EnumFields
      }
      ofType {
        name
        kind
        enumValues {
          ...EnumFields
        }
        ofType {
          name
          kind
          enumValues {
            ...EnumFields
          }
        }
      }
    }
  `);
  const {
    data: {
      __schema: { types: allTypes }
    }
  } = result;
  const types = allTypes.filter(
    type => type.name.startsWith("Schema_") && type.kind !== "ENUM"
  );
  const pageForType = {};
  const groups = [];
  for (const type of types) {
    const title = type.name.replace(/^Schema_/u, "");
    if (type.description != null) {
      const match = type.description.match(/Docs group: (\w+)/u);
      if (match) {
        const groupName = match[1];
        const outputName = "/" + toInitialLowerCase(groupName);
        type.groupName = groupName;
        const currentGroup = groups.find(group => group.name === groupName);
        if (currentGroup) {
          currentGroup.types.push(type);
        } else {
          groups.push({ name: groupName, outputName, types: [type] });
        }
        pageForType[type.name] = outputName;
      } else if (type.kind === "OBJECT") {
        throw new Error(`No group for type ${type.name}`);
      }
    } else if (type.kind === "OBJECT") {
      throw new Error(`No description for type ${type.name}`);
    }
    type.title = title;
  }
  return { types, groups, pageForType };
};
