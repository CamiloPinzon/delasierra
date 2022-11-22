import { ReactComponent as Logo } from "../../assets/svg/logo-blanco.svg";
import PROJECT_ROUTES from "../../assets/links/project-routes";

import "./footer-contacto.styles.scss";

const FooterContacto = () => {
  return (
    <div className="footer-contacto-container">
      <Logo />
      <div className="footer_email">
        <a
          href={`mailto:${PROJECT_ROUTES.CONTACT_LINKS.mainEmail}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {PROJECT_ROUTES.CONTACT_LINKS.mainEmail}
        </a>
      </div>
      <div className="footer_whatsapp">
        <a
          href={PROJECT_ROUTES.CONTACT_LINKS.whatsappLinks}
          target="_blank"
          rel="noreferrer noopener"
        >
          Whatsapp AQUÍ
        </a>
      </div>
    </div>
  );
};

export default FooterContacto;
