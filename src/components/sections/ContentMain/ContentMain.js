import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-main.scss'

const ContentMain = () => {

    return <>
        <main className="app-content-main content-main">
            <HeaderContent>
                <p>main header</p>
                <div className="header-content-divider"></div>
                <p>main header 2</p>
            </HeaderContent>
            <p>main</p>
        </main>
    </>
}

export default ContentMain