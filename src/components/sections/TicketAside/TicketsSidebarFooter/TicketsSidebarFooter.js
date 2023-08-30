import React from "react";
import './tickets-sidebar-footer.scss'
import BoostLabel from "../../../BoostLabel/BoostLabel";
import TicketsSummary from "../TicketsSummary/TicketsSummary";

const TicketsSidebarFooter = () => {

    return <>
        <footer className="tickets-footer">
            <TicketsSummary />
            <div className="tickets-footer-order">
                <button>lol</button>
            </div>
        </footer>
    </>
}

export default TicketsSidebarFooter