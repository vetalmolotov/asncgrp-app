import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-main.scss'
import {IconFootball, IconList} from "../../../assets/imgComponents/iconsCommon";
import ResultLabel from "../../ResultLabel/ResultLabel";
import MainContentTable from "../../MainContentTable/MainContentTable";

const ContentMain = () => {

    return <>
        <main className="app-content-main content-main">
            {/*<HeaderContent>*/}
            {/*    <p>main header</p>*/}
            {/*    <div className="header-content-divider"></div>*/}
            {/*    <p>main header 2</p>*/}
            {/*</HeaderContent>*/}
            {/*<p>main</p>*/}
            {/*<br/>*/}

            <MainContentTable />


        </main>
    </>
}

export default ContentMain