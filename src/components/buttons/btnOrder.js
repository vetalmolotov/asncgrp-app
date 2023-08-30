import React from "react";
import './btn-order.scss'

const ButtonOrder = ({icon, value, customClass}) => {

    return <button className={`btn-order ${customClass}`}>
        {!value ? icon : value}
    </button>
}

export default ButtonOrder