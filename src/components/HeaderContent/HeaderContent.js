import React from "react";
import './header-content.scss'

const HeaderContent = ({children}) => {

    return <>
        <header className="header-content">
            {children}
        </header>
    </>
}

export default HeaderContent