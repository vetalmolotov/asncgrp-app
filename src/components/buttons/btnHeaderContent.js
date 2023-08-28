import React from "react";
import './btn-header-content.scss'

const ButtonHeaderContent = ({children, activeClass}) => {

    return <div
        className={`header-content-btn ${activeClass}`}
        data-foo={`${activeClass}`}
    >
        {/*{`header-content-btn ${isActive ? 'active' : ''}`}*/}
        {children}
    </div>
}

export default ButtonHeaderContent