import React from "react";
import ContentSidebar from "../ContentSidebar/ContentSidebar";
import ContentMain from "../ContentMain/ContentMain";
import './app-content.scss'
import ContentFooter from "../ContentFooter/ContentFooter";

const AppContent = () => {

    return <>
        <section className="app-content">
            <ContentSidebar />
            <ContentMain />
            <ContentFooter />
        </section>
    </>
}

export default AppContent