import React, {useState} from "react";
import {IconDropdownFilled} from "../../assets/imgComponents/iconArrows";
import './dropdown-system.scss'

const DropdownSystem = ({text}) => {

    const [setOpen, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!setOpen);
    };

    return <>
        <div
            className={`dropdown-system ${setOpen ? 'open' : ''}`}
            onClick={handleToggleChange}
        >
            <p>{text}</p>
            <IconDropdownFilled />
        </div>
    </>
}

export default DropdownSystem