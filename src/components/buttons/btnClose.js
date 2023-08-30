import React from "react";
import {IconClose} from "../../assets/imgComponents/iconsCommon";
import './butons.scss'

const ButtonClose = ({customClass}) => {

    return <>
        <div className={`btn-close ${customClass}`}>
            <IconClose/>
        </div>
    </>
}

export default ButtonClose