import PROJECT_ROUTES from "../../assets/links/project-routes";

import { ReactComponent as InstagramIcon } from "../../assets/svg/Instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/Facebook.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/svg/Youtube.svg";
import { ReactComponent as SpotifyIcon } from "../../assets/svg/Spotify-icon.svg";
import { ReactComponent as SoundcloudIcon } from "../../assets/svg/Soundcloud.svg";
import "./footer-redes.styles.scss";

const FooterRedes = () => {
  return (
    <div className="footer_redes">
      <div className="social_icon instagram_icon">
        <a
          href={PROJECT_ROUTES.SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className="social_icon facebook_icon">
        <a
          href={PROJECT_ROUTES.SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon />
        </a>
      </div>
      <div className="social_icon youtube_icon">
        <a
          href={PROJECT_ROUTES.SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noreferrer noopener"
        >
          <YoutubeIcon />
        </a>
      </div>
      <div className="social_icon spotify_icon">
        <a
          href={PROJECT_ROUTES.SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noreferrer noopener"
        >
          <SpotifyIcon />
        </a>
      </div>
      <div className="social_icon soundcloud_icon">
        <a
          href={PROJECT_ROUTES.SOCIAL_LINKS.soundCloud}
          target="_blank"
          rel="noreferrer noopener"
        >
          <SoundcloudIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterRedes;
