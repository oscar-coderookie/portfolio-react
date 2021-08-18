import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const ubication = window.location.pathname;

  return (
    <div className="header">
      <nav className="header__navbar">
        {ubication === "/" ? null : (
          <NavLink className="header__link" exact to="/">
            <span>Home</span>
          </NavLink>
        )}

        {ubication === "/work" ? null : (
          <NavLink className="header__link" exact to="/work">
            <span>Portfolio</span>
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink className="header__link" path="/contact" exact to="/contact">
            <span>Contact</span>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default withRouter(Header);
