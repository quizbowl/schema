import React from "react";
import PropTypes from "prop-types";
import Layout from "./layout";
import { Helmet } from "react-helmet";

const MDXTemplate = ({
  children,
  pageContext: {
    frontmatter: { title }
  }
}) => {
  return (
    <Layout>
      <Helmet>
        <title>
          {title == null ? "Tournament Schema" : `Tournament Schema — ${title}`}
        </title>
      </Helmet>
      <div className="post">
        <header className="post-header">
          <h1>{title}</h1>
        </header>
        <article className="post-content">{children}</article>
      </div>
    </Layout>
  );
};

MDXTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
      .isRequired
  }).isRequired
};

export default MDXTemplate;
