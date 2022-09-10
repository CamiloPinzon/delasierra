import { ReactComponent as Logo } from '../../assets/svg/logo-blanco.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/Instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/Facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/svg/Youtube.svg';
import { ReactComponent as SpotifyIcon } from '../../assets/svg/Spotify-icon.svg';
import { ReactComponent as SoundcloudIcon } from '../../assets/svg/Soundcloud.svg';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer_contacto'>
                <Logo />
                <div className="footer_email">
                    <a href="mailto:wdelasierra@gmail.com">wdelasierra@gmail.com</a>
                </div>
                <div className='footer_whatsapp'>
                    <a href="https://api.whatsapp.com/send?phone=573006945276&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20Delasierra">Whatsapp AQUÍ</a>
                </div>
            </div>
            <div className='footer_redes'>
                <div className="social_icon instagram_icon">
                    <a href="https://www.instagram.com/delasierra.oficial/">
                        <InstagramIcon />
                    </a>
                </div>
                <div className="social_icon facebook_icon">
                    <a href="https://www.facebook.com/delasierrasanta">
                        <FacebookIcon />
                    </a>
                </div>
                <div className="social_icon youtube_icon">
                    <a href="https://www.youtube.com/channel/UCRyZgqX7xJmp_47wrZhQU6w">
                        <YoutubeIcon />
                    </a>
                </div>
                <div className="social_icon spotify_icon">
                    <a href="https://open.spotify.com/artist/5fe8FJ3C3lkMkSKiOZkopk">
                        <SpotifyIcon />
                    </a>
                </div>
                <div className="social_icon soundcloud_icon">
                    <a href="https://soundcloud.com/wench-r">
                        <SoundcloudIcon />
                    </a>
                </div>
            </div>
            <div className='footer_newsletter'>
                <p>Proximamente<br/>Newsletter</p>
            </div>
        </div>
    )
}

export default Footer;