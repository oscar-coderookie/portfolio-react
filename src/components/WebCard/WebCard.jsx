import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./WebCard.scss";

const WebCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="webcard" style={{ backgroundColor: props.backgroundColor }}>
      <div className="webcard__info">
        <h2 className="webcard__title">{props.title}</h2>
      </div>
      {props.thumbnail === null ? null : (
        <NavLink className="webcard__navlink" style={{ textDecoration: "none" }} exact to={props.hrefGallery}>
          <div className="webcard__img-container">
            <img src={props.thumbnail} className="webcard__thumb" alt={props.title} />
          </div>
        </NavLink>
      )}

      <div className="webcard__links-container">
        <p className="webcard__links">{t("web deploy.1")}</p>
        <a className="webcard__links" href={props.deployUrl} target="_blank" rel="noreferrer">
          {props.deployUrl}
        </a>
        <p className="webcard__links">{t("repository.1")}</p>
        <a className="webcard__links" href={props.repositorie} target="_blank" rel="noreferrer">
          {props.repositorie}
        </a>
      </div>
    </div>
  );
};

export default WebCard;
