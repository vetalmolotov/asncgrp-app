import React from "react";
import ContentSidebar from "../ContentSidebar/ContentSidebar";
import ContentMain from "../ContentMain/ContentMain";
import './app-content.scss'

const AppContent = () => {

    return <>
        <section className="app-content">
            <ContentSidebar />
            <ContentMain />
            <footer className="app-content-footer">footer</footer>
        </section>
    </>
}

export default AppContent