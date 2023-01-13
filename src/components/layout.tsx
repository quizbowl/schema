import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
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

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const data = useStaticQuery(query);
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xpx6pff.css" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="page-content">
        <div className="wrap">{children}</div>
      </div>
      <Footer data={data} />
    </>
  );
};

export default Layout;
