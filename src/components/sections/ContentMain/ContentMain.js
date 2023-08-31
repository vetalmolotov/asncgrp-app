import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-main.scss'
import {IconFootball, IconList} from "../../../assets/imgComponents/iconsCommon";
import ResultLabel from "../../ResultLabel/ResultLabel";
import MainContentTable from "../../MainContentTable/MainContentTable";

const ContentMain = () => {

    return <>
        <main className="app-content-main content-main">

            <MainContentTable customClass={'content-main-grid'} />

        </main>
    </>
}

export default ContentMain