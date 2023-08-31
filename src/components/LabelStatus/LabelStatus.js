import React from "react";
import './label-status.scss'
import {IconArrowStatus} from "../../assets/imgComponents/iconArrows";

const LabelStatus = ({status, statusData}) => {

    return <>
        <div className={`label-status ${status}`}>
            {status === 'unavailable' ? '': <IconArrowStatus />}
            {statusData}
        </div>
    </>
}

export default LabelStatus