import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer__links" href="https://github.com/oscar-coderookie" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="footer__icons" icon={faGithub} title="GitHub" />
      </a>
      <a className="footer__links" href="https://gitlab.com/industrialdesignoscar" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="footer__icons" icon={faGitlab} title="GitLab" />
      </a>
      <a
        className="footer__links"
        href="https://www.linkedin.com/in/oscar-eduardo-serna-carvajal-8312667a/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="footer__icons" icon={faLinkedin} title="LinkedIn" />
      </a>
      <div className="footer__copy-container">
        <p className="footer__copyright">Dev with:</p>
        <FontAwesomeIcon className="footer__icons" icon={faReact} title="ReactJS" />
      </div>
    </div>
  );
};

export default Footer;
