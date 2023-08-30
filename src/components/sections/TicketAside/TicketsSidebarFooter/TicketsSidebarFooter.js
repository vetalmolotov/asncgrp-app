import React from "react";
import './tickets-sidebar-footer.scss'
import BoostLabel from "../../../BoostLabel/BoostLabel";
import TicketsSummary from "../TicketsSummary/TicketsSummary";
import TicketsOrderForm from "../TicketsOrderForm/TicketsOrder";

const TicketsSidebarFooter = () => {

    return <>
        <footer className="tickets-footer">
            <TicketsSummary />
            <TicketsOrderForm />
        </footer>
    </>
}

export default TicketsSidebarFooter