import React from "react";
import { Outlet } from "react-router-dom";

import './navigation.styles.scss';

const Navigation = () => {
    return (
    <div className="navigation-container">
        <div className="menu-container">
            <div className="menu-home">
                <div className="nombre-banda">DELASIERRA</div>
                <div className="sub-title">Reggae Rocksteady</div>
            </div>
        </div>
        <Outlet />
    </div>
    )
};

export default Navigation;