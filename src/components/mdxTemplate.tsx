import React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "./layout";

type FrontMatterWithTitle = { frontmatter: { title: string } };
export const MDXTemplate: React.FC<PageProps<object, FrontMatterWithTitle>> = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => (
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
