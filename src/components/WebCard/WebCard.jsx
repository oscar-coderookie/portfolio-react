import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./WebCard.scss";

const WebCard = ({
  technologies,
  thumbnail,
  deployUrl,
  repositorie,
  backgroundColor,
  height,
  hrefGallery,
  title,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="card webcard"
      style={{ backgroundColor: backgroundColor, height: height }}
    >
      <div className="card-header">
        <h2 className="webcard__title">{title}</h2>
      </div>
      {thumbnail === null ? null : (
        <NavLink
          className="webcard__navlink"
          style={{ textDecoration: "none" }}
          exact
          to={hrefGallery}
        >
          <img src={thumbnail} className="webcard__thumb" alt={title} />
        </NavLink>
      )}
      <div className="card-body">
        {deployUrl === null ? null : (
          <React.Fragment>
            <p className="webcard__links">{t("web deploy.1")}</p>
            <a
              className="webcard__links"
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
            >
              {deployUrl}
            </a>
          </React.Fragment>
        )}
        <p className="webcard__links">{t("repository.1")}</p>
        <a
          className="webcard__links"
          href={repositorie}
          target="_blank"
          rel="noreferrer"
        >
          {repositorie}
        </a>
      </div>
      <div className="card-footer d-flex align-items-center justify-content-center">
        <p className="webcard__footer p-0 m-0 mx-2 ">{t("developed_with.1")}</p>
        {technologies === null ? (
          <span
            className="fab fa-html5"
            style={{ fontSize: 36, color: "gray", marginRight: 10 }}
          ></span>
        ) : (
          technologies.map((tech) => {
            return (
              <span
                title={tech}
                key={tech}
                style={{ fontSize: 36, color: "gray", marginRight: 10 }}
                className={`fab fa-${tech}`}
              ></span>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WebCard;
