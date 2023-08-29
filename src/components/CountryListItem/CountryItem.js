import React, {useState} from "react";
import './country-item.scss'
import {FlagAlgeria} from "../../assets/imgComponents/saidebarFlags";
import {IconDropdownMenu} from "../../assets/imgComponents/iconArrows";

const CountryItem = () => {

    const [setOpen, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!setOpen);
    };

    return <>
        <div className={`country-details ${setOpen ? 'opened' : ''}`}>
            <h4
                className="country-details-title"
                onClick={handleToggleChange}
            >
                <FlagAlgeria />
                <p>gdgd</p>
                <IconDropdownMenu className={'arrow'} />
            </h4>
            {setOpen &&
                <ul className="country-details-list">
                    <li>
                        <span>Ligue 1</span>
                        <span>2</span>
                    </li>
                    <li>
                        <span>Ligue 2</span>
                        <span>14</span>
                    </li>
                </ul>
            }

        </div>
    </>
}

export default CountryItem;