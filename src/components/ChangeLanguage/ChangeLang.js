import React from "react";
import {LangEng, LangGerman, LangTurkish, LangUkraine} from '../../assets/imgComponents/langFlags'
import lang from './change-lang.module.scss'
import '../../assets/styles/header/change-lang.scss'

const ChangeLang = () => {

    return <>
        <div className={`user-bar-lang ${lang.langWrapper} active`}>
            <div className={lang.langCurrent}>
                <LangEng/>
            </div>
            <ul className={lang.langList}>
                <li>
                    <LangGerman/>
                </li>
                <li>
                    <LangTurkish/>
                </li>
                <li>
                    <LangUkraine/>
                </li>
            </ul>
        </div>
    </>
}

export default ChangeLang