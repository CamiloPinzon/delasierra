import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
    <div className="navigation-container">
        <div className="menu-container">
            <div className="menu-home">
                <div className="nombre-banda">DELASIERRA</div>
                <div className="sub-nombre">Reggae Rocksteady</div>
            </div>
            <div className="menu-links">Links</div>
        </div>
        <Outlet />
    </div>
    )
};

export default Navigation;