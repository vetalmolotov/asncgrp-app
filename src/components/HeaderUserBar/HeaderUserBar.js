import React from "react";
import UserActions from "./UserActions/UserActions";
import UserProfile from "./UserProfile/UserProfile";
import ButtonLogout from "../buttons/btnLogout";
import ChangeLang from "../ChangeLanguage/ChangeLang";
import '../../assets/styles/header/header-user-bar.scss'
import ButtonDefault from "../buttons/btnDefault";

const HeaderUserBar = () => {

    return <>
        <section className="user-bar">
            <UserActions />
            <UserProfile />
            <ButtonDefault
                customClass={'btn-green user-bar-withdraw'}
                text={'WITHDRAWAL'}
            />
            <ChangeLang/>
            <div className="user-bar-divider"></div>
            <ButtonLogout />
        </section>
    </>
}

export default HeaderUserBar