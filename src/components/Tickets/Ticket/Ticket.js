import React from "react";
import './ticket.scss'
import ButtonClose from "../../buttons/btnClose";
import LabelStatus from "../../LabelStatus/LabelStatus";

const Ticket = ({
    ticketName,
    ticketTotal,
    ticketStatus,
    ticketStatusData
}) => {

    return <>
        <li className={`ticket ${ticketStatus}`}>
            <ButtonClose customClass={'ticket-close'} />
            <div className="ticket-name">
                {ticketName}
            </div>
            <div className="ticket-data">
                <p>Total Goals: <span>{ticketTotal}</span></p>
                <LabelStatus
                    status={ticketStatus}
                    statusData={ticketStatusData}
                />
            </div>
        </li>
    </>
}

export default Ticket