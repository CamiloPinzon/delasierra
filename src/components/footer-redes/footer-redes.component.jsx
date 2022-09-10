import { ReactComponent as InstagramIcon } from '../../assets/svg/Instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/Facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/svg/Youtube.svg';
import { ReactComponent as SpotifyIcon } from '../../assets/svg/Spotify-icon.svg';
import { ReactComponent as SoundcloudIcon } from '../../assets/svg/Soundcloud.svg';
import './footer-redes.styles.scss';

const FooterRedes = () => {
    return (
        <div className='footer_redes'>
            <div className="social_icon instagram_icon">
                <a href="https://www.instagram.com/delasierra.oficial/" target="_blank" rel="noreferrer noopener">
                    <InstagramIcon />
                </a>
            </div>
            <div className="social_icon facebook_icon">
                <a href="https://www.facebook.com/delasierrasanta" target="_blank" rel="noreferrer noopener">
                    <FacebookIcon />
                </a>
            </div>
            <div className="social_icon youtube_icon">
                <a href="https://www.youtube.com/channel/UCRyZgqX7xJmp_47wrZhQU6w" target="_blank" rel="noreferrer noopener">
                    <YoutubeIcon />
                </a>
            </div>
            <div className="social_icon spotify_icon">
                <a href="https://open.spotify.com/artist/5fe8FJ3C3lkMkSKiOZkopk" target="_blank" rel="noreferrer noopener">
                    <SpotifyIcon />
                </a>
            </div>
            <div className="social_icon soundcloud_icon">
                <a href="https://soundcloud.com/wench-r" target="_blank" rel="noreferrer noopener">
                    <SoundcloudIcon />
                </a>
            </div>
        </div>
    )
}

export default FooterRedes;