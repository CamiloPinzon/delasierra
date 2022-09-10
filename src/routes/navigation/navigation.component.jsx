import React from "react";
import { Outlet } from "react-router-dom";

import HeaderMenu from "../../components/header-menu/header-menu.component";
import Footer from "../../components/footer/footer.component";

import './navigation.styles.scss';

const Navigation = () => {
    return (
    <>
        <HeaderMenu />
        <Outlet />
        <Footer />
    </>
    )
};

export default Navigation;