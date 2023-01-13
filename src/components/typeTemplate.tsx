import { Link, PageProps } from "gatsby";
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Remark } from "react-remark";
import { SchemaTypeFields, SchemaTypeGroup } from "../listTypes";
import Layout from "./layout";

type PageContext = {
  group: SchemaTypeGroup;
  pageForType: Record<string, string>;
};

const TypeTemplate: React.FC<PageProps<object, PageContext>> = ({
  pageContext: {
    group: { name, types },
    pageForType,
  },
}) => {
  function adjustName(name: string) {
    return name;
  }
  function renderObjectType(type: SchemaTypeFields) {
    const pageName = pageForType[type.name];
    const adjustedName = adjustName(type.name);
    return (
      <Link className="name" to={`${pageName}#${adjustedName}`}>
        {adjustedName}
      </Link>
    );
  }
  function renderType(type: SchemaTypeFields): ReactNode {
    switch (type.kind) {
      case "NON_NULL":
        return renderType(type.ofType!);
      case "LIST":
        return (
          <>
            Array&nbsp;of&nbsp;<code>{renderType(type.ofType!)}</code>
          </>
        );
      case "ENUM":
        return (
          <>
            One of the following:
            <ul>
              {type.enumValues!.map((value) => (
                <li className="name" key={value.name}>
                  {value.name}
                </li>
              ))}
            </ul>
          </>
        );
      case "OBJECT":
        return renderObjectType(type);
      case "SCALAR":
        if (type.name === "Int" || type.name === "Float") {
          return <span className="name">Number</span>;
        }
      // Fall through
      default:
        return <span className="name">{adjustName(type.name)}</span>;
    }
  }
  return (
    <Layout>
      <Helmet>
        <title>
          {name == null ? "Tournament Schema" : `Tournament Schema — ${name}`}
        </title>
      </Helmet>
      {types.map((type) => (
        <div className="post" key={type.name} id={adjustName(type.name)}>
          <header className="post-header">
            <h1>{type.title}</h1>
          </header>
          <article className="post-content">
            <Remark>{type.description.replace(/\s*Docs group:.*$/, "")}</Remark>
            <table className="fields">
              <tbody>
                {type
                  .fields!.filter((field) => field.name !== "id")
                  .map((field) => (
                    <tr
                      key={field.name}
                      className={
                        field.type.kind === "NON_NULL" ? "required" : "optional"
                      }
                    >
                      <th>{field.name}</th>
                      <td className="type">{renderType(field.type)}</td>
                      <td>
                        <Remark>{field.description}</Remark>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </article>
        </div>
      ))}
    </Layout>
  );
};

export default TypeTemplate;
