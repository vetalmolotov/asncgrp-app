import React from "react";
import {
    IconFootball,
    IconBasketball,
    IconBaseball,
    IconTennis,
    IconCricket,
    IconAmericanFootbal,
    IconIceHockey,
    IconFieldHockey,
    IconLacrosse,
    IconWrestling,
    IconMMA,
    IconSnooker
} from "../../assets/imgComponents/iconsSportTypes";
import './sport-types.scss'

const SportTypes = () => {

    const SportTypesItem = [
        {
            icon: <IconFootball />,
            text: '975',
            url: '/',
            isActive: true
        },
        {
            icon: <IconBasketball />,
            text: '453',
            url: '/',
            isActive: false
        },
        {
            icon: <IconBaseball />,
            text: '652',
            url: '/',
            isActive: false
        },
        {
            icon: <IconTennis />,
            text: '321',
            url: '/',
            isActive: false
        },
        {
            icon: <IconCricket />,
            text: '30',
            url: '/',
            isActive: false
        },
        {
            icon: <IconAmericanFootbal />,
            text: '34',
            url: '/',
            isActive: false
        },
        {
            icon: <IconIceHockey />,
            text: '5',
            url: '/',
            isActive: false
        },
        {
            icon: <IconFieldHockey />,
            text: '230',
            url: '/',
            isActive: false
        },
        {
            icon: <IconLacrosse />,
            text: '43',
            url: '/',
            isActive: false
        },
        {
            icon: <IconWrestling />,
            text: '64',
            url: '/',
            isActive: false
        },
        {
            icon: <IconMMA />,
            text: '24',
            url: '/',
            isActive: false
        },
        {
            icon: <IconSnooker />,
            text: '3',
            url: '/',
            isActive: false
        },
    ]

    return <>
        <section className="sport-types">
            {SportTypesItem.map((option) => (
                <a href={option.url} className={`${option.isActive ? 'active' : ''}`}>
                    {option.icon}
                    <span>{option.text}</span>
                </a>
            ))}
        </section>
    </>
}

export default SportTypes