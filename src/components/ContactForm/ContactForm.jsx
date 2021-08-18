import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div action="" className="contact-form">
      <div className="contact-form__block1">
        <h1 className="contact-form__title">Contact Me..</h1>
        <p className="contact-form__legend">
          For making new projects or colaborating with other partners and developers, if youre interested in my jobs,
          please leave me a message: 😀
        </p>
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
            <p className="contact-form__info">29006, Málaga Spain</p>
          </div>
          <div className="contact-form__fields">
            <FontAwesomeIcon className="contact-form__icon" icon={faInstagram} />
            <p className="contact-form__info">oscarsc90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
