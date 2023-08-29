import React from "react";
import './tickets-aside.scss'
import HeaderContent from "../../HeaderContent/HeaderContent";
import {IconTrashBin} from "../../../assets/imgComponents/iconsCommon";

const TicketAside = () => {

    return <>
        <section className="tickets-sidebar">
            <HeaderContent customClass={'ticket-aside'}>
                <h4>Tickets</h4>
                <p>3</p>
                <div className="header-content-divider"></div>
                <IconTrashBin />
            </HeaderContent>
            <section>content</section>
            <footer>footer</footer>
        </section>
    </>
}

export default TicketAside