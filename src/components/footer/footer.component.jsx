import FooterRedes from '../footer-redes/footer-redes.component';

import { ReactComponent as Logo } from '../../assets/svg/logo-blanco.svg';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer_contacto'>
                <Logo />
                <div className="footer_email">
                    <a href="mailto:wdelasierra@gmail.com" target="_blank" rel="noreferrer noopener">wdelasierra@gmail.com</a>
                </div>
                <div className='footer_whatsapp'>
                    <a href="https://api.whatsapp.com/send?phone=573006945276&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20Delasierra"  target="_blank" rel="noreferrer noopener" >Whatsapp AQUÍ</a>
                </div>
            </div>
            <FooterRedes />
            <div className='footer_newsletter'>
                <p>Proximamente<br/>Newsletter</p>
            </div>
        </div>
    )
}

export default Footer;