import React from "react";

import './content-footer.scss'
import WeekList from "../../WeekList/WeekList";
import SportTypes from "../../SportTypes/SportTypes";

const ContentFooter = () => {

    return <>
        <footer className="app-content-footer content-footer">
            <WeekList />
            <SportTypes />
        </footer>
    </>
}

export default ContentFooter