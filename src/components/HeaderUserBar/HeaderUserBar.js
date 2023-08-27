import React from "react";
import UserActions from "./UserActions/UserActions";
import UserProfile from "./UserProfile/UserProfile";
import ButtonLogout from "../buttons/btnLogout";
import ChangeLang from "../ChangeLanguage/ChangeLang";
import '../../assets/styles/header/header-user-bar.scss'

const HeaderUserBar = () => {

    return <>
        <section className="user-bar">
            <UserActions />
            <UserProfile />
            <a href="/" className="btn btn-green user-bar-withdraw">WITHDRAWAL</a>
            <ChangeLang/>
            <div className="user-bar-divider"></div>
            <ButtonLogout />
        </section>
    </>
}

export default HeaderUserBar