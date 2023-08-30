import React from "react";
import './tickets-aside.scss'
import HeaderContent from "../../HeaderContent/HeaderContent";
import {IconTrashBin} from "../../../assets/imgComponents/iconsCommon";
import DropdownSystem from "../../DropdownSystem/DropdownSystem";
import TicketsList from "../../Tickets/TicketsList/TicketsList";

const TicketAside = () => {

    return <>
        <section className="tickets-sidebar">
            <HeaderContent customClass={'ticket-aside'}>
                <h4>Tickets</h4>
                <p>3</p>
                <div className="header-content-divider"></div>
                <IconTrashBin />
            </HeaderContent>
            <section className="tickets-sidebar-content">
                <DropdownSystem text={'System'} />
                <TicketsList />
            </section>
            <footer>footer</footer>
        </section>
    </>
}

export default TicketAside