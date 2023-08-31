import React from "react";
import {IconFootball, IconList} from "../../assets/imgComponents/iconsCommon";
import ResultLabel from "../ResultLabel/ResultLabel";
import LabelStatus from "../LabelStatus/LabelStatus";

const TableContent = ({
    date,
    dateTime,
    clubName1,
    clubName2,
    league,
    result1,
    result1Status,
    result2,
    result2Status,
    result3,
    result3Status,
    totalUnavailable,
    goalsOver,
    goalsOverStatus,
    inherit,
    inheritStatus,
    goalsUnder,
    goalsUnderStatus,
    handicapsUnavailable,
    handicapsTest,
    handicapsTestStatus,
    handicapsGoal1,
    handicapsGoal1Status,
    handicapsGoal2,
    handicapsGoal2Status,
    handicapsGoal3,
    handicapsGoal3Status,


                      }) => {

    return <>
        <div className="tbl-content-c content-date divider">
            <p>{date}</p>
            <strong>{dateTime}</strong>
        </div>
        <div className="tbl-content-c content-league">
            <div className="content-league-name">
                <p>{clubName1}</p>
                <p>{clubName2}</p>
            </div>
            <div className="content-league-info">
                <IconFootball />
                {league}
            </div>
        </div>
        <div className="tbl-content-c content-result">
            <ResultLabel
                data={result1}
                status={result1Status}
            />
            <ResultLabel
                data={result2}
                status={result2Status}
            />
            <ResultLabel
                data={result3}
                status={result3Status}
            />
        </div>
        <div className="tbl-content-c"></div>
        <div className="tbl-content-c content-total">
            {totalUnavailable ?
                (
                    <LabelStatus status={'unavailable'} statusData={'unavailable'} />
                ) : (<>
                    <ResultLabel
                        data={goalsOver}
                        status={goalsOverStatus}
                    />
                    <ResultLabel
                        data={inherit}
                        status={inheritStatus}
                    />
                    <ResultLabel
                        data={goalsUnder}
                        status={goalsUnderStatus}
                    />
                </>)}

        </div>
        <div className="tbl-content-c"></div>
        <div className="tbl-content-c content-handicaps">
            {handicapsUnavailable ? (
                <LabelStatus status={'unavailable'} statusData={'unavailable'} />
            ) : (
                <>
                    <ResultLabel
                        data={handicapsTest}
                        status={handicapsTestStatus}
                    />
                    <ResultLabel
                        data={handicapsGoal1}
                        status={handicapsGoal1Status}
                    />
                    <ResultLabel
                        data={handicapsGoal2}
                        status={handicapsGoal2Status}
                    />
                    <ResultLabel
                        data={handicapsGoal3}
                        status={handicapsGoal3Status}
                    />
                </>
            )}
        </div>
        <div className="tbl-content-c content-list">
            <ul className="content-list-additional">
                <li><IconList /></li>
                <li>+203</li>
            </ul>
        </div>
    </>
}

export default TableContent