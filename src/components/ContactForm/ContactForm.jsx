import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-form">
      <div className="container-xl">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="contact-form__block1">
              <h1 className="contact-form__title">{t("contact_title.1")}</h1>
              <p className="contact-form__legend">{t("contact_text.1")}</p>
              <div className="contact-form__container">
                <div className="contact-form__fields">
                  <FontAwesomeIcon className="contact-form__icon" icon={faPhone} />
                  <p className="contact-form__info">678 13 41 58</p>
                </div>
                <div className="contact-form__fields">
                  <FontAwesomeIcon className="contact-form__icon" icon={faMailBulk} />
                  <p className="contact-form__info">industrialdesignoscar@gmail.com</p>
                </div>
                <div className="contact-form__fields">
                  <FontAwesomeIcon className="contact-form__icon" icon={faLocationArrow} />
                  <p className="contact-form__info">{t("location.1")}</p>
                </div>
                <div className="contact-form__fields">
                  <FontAwesomeIcon className="contact-form__icon" icon={faInstagram} />
                  <p className="contact-form__info">oscarsc90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
