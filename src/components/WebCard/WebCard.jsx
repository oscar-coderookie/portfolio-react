import { faAngular, faHtml5, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./WebCard.scss";

const WebCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="card webcard" style={{ backgroundColor: props.backgroundColor, height: props.height }}>
      <div className="card-header">
        <h2 className="webcard__title">{props.title}</h2>
      </div>
      {props.thumbnail === null ? null : (
        <NavLink className="webcard__navlink" style={{ textDecoration: "none" }} exact to={props.hrefGallery}>
          <img src={props.thumbnail} className="webcard__thumb" alt={props.title} />
        </NavLink>
      )}
      <div className="card-body">
        <p className="webcard__links">{t("web deploy.1")}</p>
        <a className="webcard__links" href={props.deployUrl} target="_blank" rel="noreferrer">
          {props.deployUrl}
        </a>
        <p className="webcard__links">{t("repository.1")}</p>
        <a className="webcard__links" href={props.repositorie} target="_blank" rel="noreferrer">
          {props.repositorie}
        </a>
        
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center">
        <p className="webcard__footer p-0 m-0 mx-2 ">{t("developed_with.1")}</p>
      
          {props.icon === "angular" ? <FontAwesomeIcon icon={faAngular} title="Angular" style={{fontSize:36, color: 'gray'}}/> : null}
          {props.icon === "nodejs" ? <FontAwesomeIcon icon={faNodeJs} title="NodeJs" style={{fontSize:36, color: 'gray'}}/> : null}
          {props.icon === "reactjs" ? <FontAwesomeIcon icon={faReact} title="ReactJs" style={{fontSize:36, color: 'gray'}}/> : null}
          {props.icon === "html" ? <FontAwesomeIcon icon={faHtml5} title="Html" style={{fontSize:36, color: 'gray'}}/> : null}
          <FontAwesomeIcon icon={faSass} title="Sass" style={{fontSize:36, color: 'gray', marginLeft: 10}}/>
        </div>
    </div>
  );
};

export default WebCard;
