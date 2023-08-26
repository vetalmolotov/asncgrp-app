import React from "react";
import menuStyles from './nav.module.scss'
import '../../assets/styles/header/menu.scss'


const MainMenu = () => {

    return <>
        <nav className={menuStyles.nav}>
            <a className="nav-link nav-link__active" href="/">HOMEPAGE</a>
            <a className="nav-link" href="/">LIVE BETS</a>
            <a className="nav-link" href="/">SPORTS</a>
            <a className="nav-link" href="/">HIGHLIGHTS</a>
            <a className="nav-link" href="/">TOP MATCHES</a>
        </nav>
    </>
}

export default MainMenu