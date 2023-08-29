import React from "react";

import './week-list.scss'

const WeekList = () => {

    const weekListItems = [
        {
            url: '/',
            text: 'Today',
            isActive: false
        },
        {
            url: '/',
            text: 'Tomorrow',
            isActive: true
        },
        {
            url: '/',
            text: 'Sunday',
            isActive: false
        },
        {
            url: '/',
            text: 'Monday',
            isActive: false
        },
        {
            url: '/',
            text: 'Tuesday',
            isActive: false
        },
        {
            url: '/',
            text: 'Weednesday',
            isActive: false
        },
        {
            url: '/',
            text: 'Thursday',
            isActive: false
        },
    ]

    return <>
        <section className="weekend-list">
            {weekListItems.map((option) => (
                <a href={option.url} className={`weekend-list-item ${option.isActive ? 'active' : ''}`}>
                    <span>{option.text}</span>
                </a>
            ))}
        </section>
    </>
}

export default WeekList