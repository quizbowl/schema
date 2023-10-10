import type { ExecutionResult } from "graphql";

/* eslint-env node */
function toInitialLowerCase(string: string) {
  return string[0].toLowerCase() + string.slice(1);
}

export type SchemaType = {
  groupName: string;
  title: string;
  description: string;
  fields?: SchemaField[];
} & SchemaTypeFields;

export type SchemaTypeFields = {
  name: string;
  kind: string;
  enumValues?: { name: string; description: string }[];
  ofType?: SchemaTypeFields;
};

export type SchemaField = {
  name: string;
  description: string;
  type: SchemaTypeFields;
};

export type SchemaTypeGroup = {
  name: string;
  outputName: string;
  types: SchemaType[];
};

export default async function listTypes(
  graphql: (queryString: string) => Promise<ExecutionResult>
) {
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
      __schema: { types: allTypes },
    },
  } = result;
  const types: SchemaType[] = allTypes.filter(
    (type: SchemaType) => !type.name.startsWith("_") && type.kind !== "ENUM"
  );
  const pageForType: Record<string, string> = {};
  const groups: SchemaTypeGroup[] = [];
  for (const type of types) {
    const title = type.name;
    if (type.description != null) {
      const match = type.description.match(/Docs group: (\w+)/u);
      if (match) {
        const groupName = match[1];
        if (groupName === "Skip") {
          continue;
        }
        const outputName = "/" + toInitialLowerCase(groupName);
        type.groupName = groupName;
        const currentGroup = groups.find((group) => group.name === groupName);
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
}
