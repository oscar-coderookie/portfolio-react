import React from "react";
import { NavLink, withRouter, useHistory  } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const ubication = window.location.pathname;
  const history = useHistory();

  return (
    <div className="header">
      <nav className="header__navbar">
        {ubication === '/' ? null : (<FontAwesomeIcon  onClick={() => history.goBack()} className="back-btn" icon={faChevronLeft} />)}
        {/* <FontAwesomeIcon style={{position: 'absolute', left: 0, top: 0, width: 80, marginLeft:20}}  icon={faChevronLeft} /> */}
        
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
