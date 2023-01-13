import { Link } from "gatsby";
import React from "react";
import menuIcon from "../../svg/menu-icon.svg";

type Props = { siteTitle: string };
const Header: React.FC<Props> = ({ siteTitle }) => (
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
          <Link className="page-link" to="/serialization">
            Serialization
          </Link>
        </div>
      </nav>{" "}
    </div>
  </header>
);

export default Header;
