import React from "react";
import { NavLink, withRouter, useHistory  } from "react-router-dom";
import "./MenuMobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBriefcase, faChevronLeft, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import spain from "../../img/spain.png";
import uk from "../../img/uk.png";

const MenuMobile = () => {
  const ubication = window.location.pathname;
  const history = useHistory();

  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="mobile">
      <nav className="mobile__navbar">
        {ubication === '/' ? null : (<FontAwesomeIcon  onClick={() => history.goBack()} className="back-btn" icon={faChevronLeft} />)}
        {/* <FontAwesomeIcon style={{position: 'absolute', left: 0, top: 0, width: 80, marginLeft:20}}  icon={faChevronLeft} /> */}
        
        {ubication === "/" ? null : (
          <NavLink className="mobile__link" exact to="/">
            <FontAwesomeIcon icon={faHouseUser} className="mobile__icons"/>
          </NavLink>
         
        )}

        {ubication === "/work" ? null : (
          <NavLink className="mobile__link" exact to="/work">
          <FontAwesomeIcon icon={faBriefcase} className="mobile__icons"/>
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink className="mobile__link" path="/contact" exact to="/contact">
          <FontAwesomeIcon icon={faAddressBook} className="mobile__icons"/>
          </NavLink>
        )}
        <div className="mobile__language-container">
          <button className="mobile__language" onClick={() => handleClick("en")}>
            <img className="mobile__flag" src={spain} alt="spanish" />
          </button>
          <button className="mobile__language" onClick={() => handleClick("es")}>
            <img className="mobile__flag" src={uk} alt="english" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(MenuMobile);
