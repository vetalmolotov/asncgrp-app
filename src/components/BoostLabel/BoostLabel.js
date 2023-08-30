import React from "react";
import './boost-label.scss'
import {IconBooster} from "../../assets/imgComponents/iconsCommon";

const BoostLabel = ({customClass, value}) => {

    return <>
        <span className={`boost-label ${customClass}`}>
            <IconBooster />
            {value}
        </span>
    </>
}

export default BoostLabel