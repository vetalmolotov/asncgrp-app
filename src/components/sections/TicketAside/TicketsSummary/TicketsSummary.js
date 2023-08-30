import React from "react";
import './tickets-summary.scss'
import BoostLabel from "../../../BoostLabel/BoostLabel";

const TicketsSummary = () => {

    return <>
        <ul className="tickets-footer-summary">
            <li>
                <p>Combine Boost</p>
                <BoostLabel
                    customClass={''}
                    value={'154.0 EUR'}
                />
            </li>
            <li>
                <p>Max Quote</p>
                <span>5.70</span>
            </li>
            <li>
                <p>Limits</p>
                <span>1 - 5.000</span>
            </li>
            <li>
                <p>To Win</p>
                <span>2.850,00 FC</span>
            </li>
        </ul>
    </>
}

export default TicketsSummary