import React, {useState} from "react";
import {IconDropdown} from "../../assets/imgComponents/iconArrows";
import './country-item.scss'

const CountryItem = ({flag, title, detailsText, detailsData}) => {

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
                {flag}
                <p>{title}</p>
                <IconDropdown className={'arrow'} />
            </h4>
            {setOpen &&
                <ul className="country-details-list">
                    {/*
                    we must use map() function here
                    but for now i can't figure out how to implement it
                    */}
                    <li>
                        <span>{detailsText}</span>
                        <span>{detailsData}</span>
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