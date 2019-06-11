import React from "react";
import { StaticQuery, graphql } from "gatsby";

const VersionNumber = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            version
          }
        }
      }
    `}
    render={data => data.site.siteMetadata.version}
  />
);

export default VersionNumber;
