import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import menuIcon from "../../svg/menu-icon.svg";

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="wrap">
      <Link className="site-title" to="/">
        {siteTitle}
      </Link>

      <nav className="site-nav">
        <a href="#" className="menu-icon">
          <img src={menuIcon} />
        </a>
        <div className="trigger">
          <Link className="page-link" to="/tournament">
            Tournament
          </Link>
          <Link className="page-link" to="/registration">
            Registration
          </Link>
          <Link className="page-link" to="/phase">
            Phase
          </Link>
          <Link className="page-link" to="/match">
            Match
          </Link>
          <Link className="page-link" to="/question">
            Question
          </Link>
          <Link className="page-link" to="/team">
            Team
          </Link>
          <Link className="page-link" to="/player">
            Player
          </Link>
          <Link className="page-link" to="/serialization">
            Serialization
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
