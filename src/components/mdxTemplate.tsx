import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout, { HeadTemplate } from "./layout";

export type FrontMatterWithTitle = { frontmatter: { title: string } };
export const MDXTemplate: React.FC<PageProps<object, FrontMatterWithTitle>> = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => (
  <Layout>
    <div className="post">
      <header className="post-header">
        <h1>{title}</h1>
      </header>
      <article className="post-content">{children}</article>
    </div>
  </Layout>
);

export const MDXHeadTemplate: HeadFC<object, FrontMatterWithTitle> = ({
  pageContext: {
    frontmatter: { title },
  },
}) => <HeadTemplate title={title} />;
