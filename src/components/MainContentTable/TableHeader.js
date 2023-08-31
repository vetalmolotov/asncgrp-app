import React from "react";
import {IconArrowSorting} from "../../assets/imgComponents/iconArrows";

const TableHeader = () => {

    return <>
        <div className="tbl-content-h by-date">
            <h5>Football <IconArrowSorting /></h5>
        </div>
        <div className="tbl-content-h by-league">
            <h5>All Leagues <IconArrowSorting /></h5>
        </div>
        <div className="tbl-content-h">
            <h5>Match Result</h5>
        </div>
        <div className="tbl-content-h"></div>
        <div className="tbl-content-h">
            <h5>Total Goals</h5>
        </div>
        <div className="tbl-content-h"></div>
        <div className="tbl-content-h">
            <h5>Goals Handicap 3 Way</h5>
        </div>
        <div className="tbl-content-h"></div>
    </>
}

export default TableHeader