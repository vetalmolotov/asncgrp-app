import React from "react";
import {LangEng, LangGerman, LangTurkish, LangUkraine} from '../../assets/imgComponents/langFlags'
import lang from './change-lang.module.scss'
import '../../assets/styles/header/change-lang.scss'

const ChangeLang = () => {

    const langFlagItem = [
        {
            id: '0',
            icon: <LangGerman/>
        },
        {
            id: '1',
            icon: <LangTurkish/>
        },
        {
            id: '2',
            icon: <LangUkraine/>
        }
    ]

    return <>
        <div className={`user-bar-lang ${lang.langWrapper} active`}>
            <div className={lang.langCurrent}>
                <LangEng/>
            </div>
            <ul className={lang.langList}>
                {langFlagItem.map((option) => (
                    <li key={option.id}>
                        {option.icon}
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default ChangeLang