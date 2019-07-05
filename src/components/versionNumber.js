import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const VersionNumber = ({ children }) => (
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
    render={data => children(data.site.siteMetadata.version)}
  />
);

VersionNumber.propTypes = {
  children: PropTypes.func
};

VersionNumber.defaultProps = {
  children: number => number
};

export default VersionNumber;
