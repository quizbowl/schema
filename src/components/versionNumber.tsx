import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import React from "react";

const VersionNumber: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          version
        }
      }
    }
  `);
  return data.site.siteMetadata.version;
};

export default VersionNumber;
