import React from "react";
import './result-label.scss'
import {IconLock} from "../../assets/imgComponents/iconsCommon";

const ResultLabel = ({
    data,
    grow,
    fall,
    filled,
    transparent,
    locked
                     }) => {

    return <>
        <div className={`
            result-label
            ${grow ? 'grow' : ''}
            ${fall ? 'fall' : ''}
            ${filled ? 'filled' : ''}
            ${transparent ? 'transparent' : ''}
        `}>
            <span>
                {locked ? <IconLock /> : data}
            </span>
        </div>
    </>
}

export default ResultLabel