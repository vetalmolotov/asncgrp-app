import React from "react";
import './tickets-list.scss'
import Ticket from "../Ticket/Ticket";

const TicketsList = () => {

    const ticketsData = [
        {
            name: 'FC Aarau - Yveerdon',
            total: 'Under (2.5)',
            status: 'grow',
            statusData: '8.00'
        },
        {
            name: 'FC Aarau - Yveerdon',
            total: 'Over (2.5)',
            status: 'fall',
            statusData: '8.00'
        },
        {
            name: 'FC Aarau - Yveerdon',
            total: 'Under (0.5)',
            status: 'unavailable',
            statusData: 'unavailable'
        },
        {
            name: 'FC Aarau - Yveerdon',
            total: 'Under (3)',
            status: 'grow',
            statusData: '10.00'
        },
    ]

    return <>
        <ul className="tickets-list">
            {ticketsData.map((option) => (
                <Ticket
                    ticketName={option.name}
                    ticketTotal={option.total}
                    ticketStatus={option.status}
                    ticketStatusData={option.statusData}
                />
            ))}
            {/*<Ticket*/}
            {/*    ticketName={'FC Aarau - Yveerdon'}*/}
            {/*    ticketTotal={'Under (2.5)'}*/}
            {/*    ticketStatus={'grow'}*/}
            {/*    ticketStatusData={'8.00'}*/}
            {/*/>*/}
            {/*<Ticket*/}
            {/*    ticketName={'FC Aarau - Yveerdon'}*/}
            {/*    ticketTotal={'Over (2.5)'}*/}
            {/*    ticketStatus={'fall'}*/}
            {/*    ticketStatusData={'4.21'}*/}
            {/*/>*/}
            {/*<Ticket*/}
            {/*    ticketName={'FC Aarau - Yveerdon'}*/}
            {/*    ticketTotal={'Under (2.5)'}*/}
            {/*    ticketStatus={'unavailable'}*/}
            {/*    ticketStatusData={'unavailable'}*/}
            {/*/>*/}
        </ul>
    </>
}

export default TicketsList