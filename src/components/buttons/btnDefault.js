import React from "react";
import './butons.scss'

const ButtonDefault = ({text, customClass}) => {

    return <button className={`btn ${customClass}`}>
        {text}
    </button>
}

export default ButtonDefault