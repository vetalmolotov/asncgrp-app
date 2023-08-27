import React from "react";
import MainLogo from "../../AppLogo/Logo";
import MainMenu from "../../MainMenu/Navigation";
import HeaderUserBar from "../../HeaderUserBar/HeaderUserBar";
import header from './header.module.scss'

const AppHeader = () => {

    return <>
        <header className={header.appHeader}>
            <MainLogo />
            <MainMenu />
            <HeaderUserBar />
        </header>
    </>
}

export default AppHeader