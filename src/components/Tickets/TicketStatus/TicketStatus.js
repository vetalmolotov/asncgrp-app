import React from "react";
import './ticket-status.scss'
import {IconArrowStatus} from "../../../assets/imgComponents/iconArrows";

const TicketStatus = ({status, statusData}) => {

    return <>
        <div className={`ticket-status ${status}`}>
            {status === 'unavailable' ? '': <IconArrowStatus />}
            {statusData}
        </div>
    </>
}

export default TicketStatus