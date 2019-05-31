import React from "react";
import PropTypes from "prop-types";
import Layout from "./layout";
import remark from "remark";
import remark2react from "remark-react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

function parseMarkdown(input) {
  return remark()
    .use(remark2react)
    .processSync(input).contents;
}

function adjustName(name) {
  if (name.startsWith("Schema_")) {
    return name.replace(/^Schema_/u, "");
  }
  return name;
}

const TypeTemplate = ({
  pageContext: {
    group: { name, types },
    pageForType
  }
}) => {
  function renderObjectType(type) {
    const pageName = pageForType[type.name];
    const adjustedName = adjustName(type.name);
    return (
      <Link className="name" to={`${pageName}#${adjustedName}`}>
        {adjustedName}
      </Link>
    );
  }
  function renderType(type) {
    switch (type.kind) {
      case "NON_NULL":
        return renderType(type.ofType);
      case "LIST":
        return (
          <>
            Array&nbsp;of&nbsp;<code>{renderType(type.ofType)}</code>
          </>
        );
      case "ENUM":
        return (
          <>
            One of the following:
            <ul>
              {type.enumValues.map(value => (
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
          {name == null ? "Tournament Schema" : `Tournament Schema — ${name}`}
        </title>
      </Helmet>
      {types.map(type => (
        <div className="post" key={type.name} id={adjustName(type.name)}>
          <header className="post-header">
            <h1>{type.title}</h1>
          </header>
          <article className="post-content">
            {parseMarkdown(type.description.replace(/\s*Docs group:.*$/, ""))}
            <table className="fields">
              <tbody>
                {type.fields
                  .filter(field => field.name !== "id")
                  .map(field => (
                    <tr
                      key={field.name}
                      className={
                        field.type.kind === "NON_NULL" ? "required" : "optional"
                      }
                    >
                      <th>{field.name}</th>
                      <td className="type">{renderType(field.type)}</td>
                      <td>{parseMarkdown(field.description)}</td>
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

TypeTemplate.propTypes = {
  pageContext: PropTypes.shape({
    group: PropTypes.shape({
      types: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired
      )
    }).isRequired
  }).isRequired
};

export default TypeTemplate;
