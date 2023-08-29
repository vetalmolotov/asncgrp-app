import React from "react";
import './header-content.scss'

const HeaderContent = ({children, customClass}) => {

    return <>
        <header className={`header-content ${customClass}`}>
            {children}
        </header>
    </>
}

export default HeaderContent