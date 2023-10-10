import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

type HeadProps = { title: string };
export const HeadTemplate = ({ title }: HeadProps) => (
  <>
    <link
      id="typekit"
      rel="stylesheet"
      href="https://use.typekit.net/xpx6pff.css"
    />
    <title>
      {title == null ? "Tournament Schema" : `Tournament Schema — ${title}`}
    </title>
  </>
);

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const data = useStaticQuery(query);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="page-content">
        <div className="wrap">{children}</div>
      </div>
      <Footer data={data} />
    </>
  );
};

export default Layout;
