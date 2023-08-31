import React from "react";
import './result-label.scss'
import {IconLock} from "../../assets/imgComponents/iconsCommon";

const ResultLabel = ({
    data,
    status,
                     }) => {

    return <>
        <div className={`
            result-label
            ${status === 'grow' ? 'grow' : ''}
            ${status === 'fall' ? 'fall' : ''}
            ${status === 'filled' ? 'filled' : ''}
            ${status === 'transparent' ? 'transparent' : ''}
        `}>
            <span>
                {status === 'locked' ? <IconLock /> : data}
            </span>
        </div>
    </>
}

export default ResultLabel