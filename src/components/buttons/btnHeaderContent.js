import React from "react";
import './btn-header-content.scss'

const ButtonHeaderContent = ({children}) => {

    return <div className="header-content-btn">
        {children}
    </div>
}

export default ButtonHeaderContent