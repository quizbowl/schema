import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

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

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="page-content">
          <div className="wrap">{children}</div>
        </div>
        <Footer data={data} />
      </>
    )}
  />
);

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
