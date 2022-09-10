/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { ReactComponent as Aurora } from '../../assets/svg/Aurora.svg';
import { ReactComponent as Gaiteros } from '../../assets/svg/gaiteros.svg';
import './hero.styles.scss';

const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hero-content_container">
                <div className="hero-content_aurora">
                    <Aurora />
                </div>
                <div className="hero-content_gaiteros">
                    <Gaiteros />
                </div>
                <div className="hero-content-links">
                    <a href="https://open.spotify.com/track/03AvvQELnfgJPnhWVQ4ZMJ?si=da245b22f51b419b" target="_blank" rel="noreferrer noopener">
                        <div className="hero-content_spotify"></div>
                    </a>
                </div>
                <div className="hero-content_embed">
                    <iframe src="https://open.spotify.com/embed/track/03AvvQELnfgJPnhWVQ4ZMJ?utm_source=generator&theme=0" frameBorder="0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hero;