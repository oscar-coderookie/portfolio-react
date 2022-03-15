import React from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import spain from "../../img/spain.png";
import uk from "../../img/uk.png";
import ThemeChanger from "./../../ThemeChanger";

const Header = () => {
  const ubication = window.location.pathname;
  const history = useHistory();

  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header">
    <ThemeChanger/>
      <nav className="header__navbar">
        {ubication === "/" ? null : (
          <FontAwesomeIcon onClick={() => history.goBack()} className="back-btn" icon={faChevronLeft} />
        )}
        {/* <FontAwesomeIcon style={{position: 'absolute', left: 0, top: 0, width: 80, marginLeft:20}}  icon={faChevronLeft} /> */}

        {ubication === "/" ? null : (
          <NavLink className="header__link" exact to="/">
            <span>{t("Home.1")}</span>
          </NavLink>
        )}

        {ubication === "/work" ? null : (
          <NavLink className="header__link" exact to="/work">
            <span>{t("Portfolio.1")}</span>
          </NavLink>
        )}

        {ubication === "/contact" ? null : (
          <NavLink className="header__link" path="/contact" exact to="/contact">
            <span>{t("Contact.1")}</span>
          </NavLink>
        )}
        <div className="header__language-container">
          <button className="header__language" onClick={() => handleClick("en")}>
            <img className="header__flag" src={spain} alt="spanish" />
          </button>
          <button className="header__language" onClick={() => handleClick("es")}>
            <img className="header__flag" src={uk} alt="english" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
