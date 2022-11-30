import React from "react";

import PROJECT_ROUTES from "../../assets/links/project-routes.js";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content_container">
        <div className="hero-content-links">
          <a
            className="song-button"
            href={PROJECT_ROUTES.SEASONAL_LINKS.songLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="hero-content_spotify"></div>
          </a>
        </div>
        <div className="hero-content_embed">
          <iframe
            src={PROJECT_ROUTES.SEASONAL_LINKS.spotifyIframe}
            frameBorder="0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowTrasparency="yes"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
