import React from "react";
import MainLogo from "../../AppLogo/Logo";
import MainMenu from "../../MainMenu/Navigation";

import header from './header.module.scss'

const AppHeader = () => {

    return <>
        <header className={header.appHeader}>
            <MainLogo />
            <MainMenu />
            <div></div>
        </header>
    </>
}

export default AppHeader