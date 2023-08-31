import React from "react";
import TableHeader from "./TableHeader";
import TableFootnote from "./TableFootnote";
import TableContent from "./TableContent";
import './content-table.scss'

const MainContentTable = ({customClass}) => {

    const tableContent = [
        {
            date: '05 November',
            dateTime: '13:00',
            club1: 'Sunderland',
            club2: 'West Brom',
            league: 'England / Championship',
            result: {
                result1: '4.49',
                result1Status: 'fall',
                result2: '3.21',
                result2Status: '',
                result3: '1.50',
                result3Status: 'fall',
            },
            totalGoals: {
                unavailable: false,
                over: '2.10',
                overStatus: 'filled',
                inherit: '2.5',
                inheritStatus: 'transparent',
                under: '6.05',
                underStatus: '',
            },
            goalsHandicaps: {
                unavailable: false,
                test: '0.5',
                testStatus: 'transparent',
                goal1: '4.23',
                goal1Status: '',
                goal2: '4.90',
                goal2Status: '',
                goal3: '7.75',
                goal3Status: '',
            },
        },
        {
            date: '05 November',
            dateTime: '15:00',
            club1: 'Deportive Alavés',
            club2: 'Levante UD',
            league: 'Spain / LaLiga 2',
            result: {
                result1: '',
                result1Status: 'locked',
                result2: '',
                result2Status: 'locked',
                result3: '',
                result3Status: 'locked',
            },
            totalGoals: {
                unavailable: false,
                over: '',
                overStatus: 'locked',
                inherit: '2.5',
                inheritStatus: 'transparent',
                under: '',
                underStatus: 'locked',
            },
            goalsHandicaps: {
                unavailable: false,
                test: '05',
                testStatus: 'transparent',
                goal1: '',
                goal1Status: 'locked',
                goal2: '',
                goal2Status: 'locked',
                goal3: '',
                goal3Status: 'locked',
            },
        },
        {
            date: '05 November',
            dateTime: '17:00',
            club1: 'Brescia',
            club2: 'Parma',
            league: 'Italy / Serie B',
            result: {
                result1: '7.21',
                result1Status: 'grow',
                result2: '8.00',
                result2Status: 'fall',
                result3: '8.21',
                result3Status: 'grow',
            },
            totalGoals: {
                unavailable: false,
                over: '1.90',
                overStatus: 'filled',
                inherit: '2.5',
                inheritStatus: 'transparent',
                under: '3.10',
                underStatus: 'grow',
            },
            goalsHandicaps: {
                unavailable: false,
                test: '05',
                testStatus: 'transparent',
                goal1: '4.00',
                goal1Status: '',
                goal2: '6.30',
                goal2Status: '',
                goal3: '8.90',
                goal3Status: '',
            },
        },
        {
            date: '05 November',
            dateTime: '21:00',
            club1: 'Jong AZ',
            club2: 'Jong PSV',
            league: 'Netherlands / Eredivisie',
            result: {
                result1: '1.80',
                result1Status: 'grow',
                result2: '3.25',
                result2Status: '',
                result3: '4.14',
                result3Status: 'grow',
            },
            totalGoals: {
                totalUnavailable: true,
                over: '',
                overStatus: '',
                inherit: '',
                inheritStatus: '',
                under: '',
                underStatus: '',
            },
            goalsHandicaps: {
                handicapsUnavailable: true,
                test: '',
                testStatus: '',
                goal1: '',
                goal1Status: '',
                goal2: '',
                goal2Status: '',
                goal3: '',
                goal3Status: '',
            },
        },

    ]

    return <>
        <div className={`${customClass} tbl-content`}>

            {/* table heading */}
            <TableHeader />

            {/* table footnote */}
            <TableFootnote />

            {/* table content */}
            {tableContent.map((i) => (
                <TableContent
                    date={i.date}
                    dateTime={i.dateTime}
                    clubName1={i.club1}
                    clubName2={i.club2}
                    league={i.league}
                    result1={i.result.result1}
                    result1Status={i.result.result1Status}
                    result2={i.result.result1}
                    result2Status={i.result.result2Status}
                    result3={i.result.result3}
                    result3Status={i.result.result3Status}
                    totalUnavailable={i.totalGoals.totalUnavailable}
                    goalsOver={i.totalGoals.over}
                    goalsOverStatus={i.totalGoals.overStatus}
                    inherit={i.totalGoals.inherit}
                    inheritStatus={i.totalGoals.inheritStatus}
                    goalsUnder={i.totalGoals.under}
                    goalsUnderStatus={i.totalGoals.underStatus}
                    handicapsUnavailable={i.goalsHandicaps.handicapsUnavailable}
                    handicapsTest={i.goalsHandicaps.test}
                    handicapsTestStatus={i.goalsHandicaps.testStatus}
                    handicapsGoal1={i.goalsHandicaps.goal1}
                    handicapsGoal1Status={i.goalsHandicaps.goal1Status}
                    handicapsGoal2={i.goalsHandicaps.goal2}
                    handicapsGoal2Status={i.goalsHandicaps.goal2Status}
                    handicapsGoal3={i.goalsHandicaps.goal3}
                    handicapsGoal3Status={i.goalsHandicaps.goal3Status}
                />
            ))}
        </div>
    </>
}

export default MainContentTable