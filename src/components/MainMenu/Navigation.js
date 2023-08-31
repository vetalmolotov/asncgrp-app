import React from "react";
import './nav.scss'


const MainMenu = () => {
    const menuItem = [
        {
            id: '0',
            menuText: 'HOMEPAGE',
            url: '/',
            isActive: true
        },
        {
            id: '1',
            menuText: 'LIVE BETS',
            url: '/',
            isActive: false
        },
        {
            id: '2',
            menuText: 'SPORTS',
            url: '/',
            isActive: false
        },
        {
            id: '3',
            menuText: 'HIGHLIGHTS',
            url: '/',
            isActive: false
        },
        {
            id: '4',
            menuText: 'TOP MATCHES',
            url: '/',
            isActive: false
        },

    ];
    return <>
        <nav className="App-nav">
            {menuItem.map((option) => (
                <a
                    key={option.id}
                    className={`App-nav-link ${option.isActive ? 'App-nav-link__active' : ''}`}
                    href={option.url}
                >
                        {option.menuText}
                </a>
            ))}
        </nav>
    </>
}

export default MainMenu