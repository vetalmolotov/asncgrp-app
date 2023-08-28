import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-sidebar.scss'
import ButtonHeaderContent from "../../buttons/btnHeaderContent";

const ContentSidebar = () => {

    return <>
        <section className="app-content-sidebar content-sidebar">
            <HeaderContent>
                <ButtonHeaderContent>tedt</ButtonHeaderContent>
                <ButtonHeaderContent>test</ButtonHeaderContent>
            </HeaderContent>
            <p>section</p>
        </section>
    </>
}

export default ContentSidebar