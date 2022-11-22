import FooterContacto from "../footer-contacto/footer-contacto.component";
import FooterRedes from "../footer-redes/footer-redes.component";
import NewsletterForm from "../newsletter-form/newsletter-form.contact";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterContacto />
      <FooterRedes />
      <NewsletterForm />
    </div>
  );
};

export default Footer;
