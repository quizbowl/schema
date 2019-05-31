import React from "react";
import PropTypes from "prop-types";
import githubIcon from "../../svg/github-icon.svg";

const Footer = ({ data }) => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-col-1 column">
        <ul>
          <li>{data.site.siteMetadata.title}</li>
        </ul>
      </div>

      <div className="footer-col-2 column">
        <ul>
          <li>
            <a href="https://github.com/quizbowl/schema">
              <span className="icon github">
                <img className="github-icon-svg" src={githubIcon} />
              </span>
              <span className="username">fork us on GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-col-3 column">
        <p className="text">{data.site.siteMetadata.description}</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({ title: PropTypes.string.isRequired })
    }).isRequired
  }).isRequired
};

export default Footer;
