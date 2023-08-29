import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import ButtonHeaderContent from "../../buttons/btnHeaderContent";
import {IconTitleCountries} from "../../../assets/imgComponents/iconsCommon";
import CountryItem from "../../CountryListItem/CountryItem";
import './content-sidebar.scss'

const ContentSidebar = () => {

    const sidebarHeaderItem = [
        {
            id: '0',
            text: 'All',
            isActive: false
        },
        {
            id: '1',
            text: 'Today',
            isActive: true
        },
        {
            id: '2',
            text: '3 Hour',
            isActive: false
        },
        {
            id: '3',
            text: '3 Day',
            isActive: false
        }
    ]

    const countryList = [
        {
            flag: true,
        }
    ]

    return <>
        <section className="app-content-sidebar content-sidebar">
            <HeaderContent>
                {sidebarHeaderItem.map((option) => (
                    <ButtonHeaderContent
                        key={option.id}
                        className={`${option.isActive ? 'active' : ''}`}
                        data-foo={`${option.isActive ? 'active' : ''}`}
                    >
                        {option.text}
                    </ButtonHeaderContent>
                ))}
            </HeaderContent>
            <div className="content-sidebar-content">
                {/*
                    if there was more similar titles with icon on the left,
                    like this one below,
                    i'll create a separate component
                */}
                <h3 className="content-sidebar-title">
                    <IconTitleCountries /><span>Countries</span>
                </h3>
                <CountryItem />
                <CountryItem />
            </div>
        </section>
    </>
}

export default ContentSidebar