import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import ButtonHeaderContent from "../../buttons/btnHeaderContent";
import {IconTitleCountries} from "../../../assets/imgComponents/iconsCommon";
import CountryItem from "../../CountryListItem/CountryItem";
import {
    FlagAlgeria,
    FlagArgentina,
    FlagAustralia,
    FlagAustria,
    FlagChile, FlagChina
} from "../../../assets/imgComponents/saidebarFlags";
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
            flag: <FlagAlgeria/>,
            title: 'Algeria',
            content:
                {
                    text: 'Ligue 1',
                    data: '2'
                },
                // {
                //     text: 'Ligue 2',
                //     data: '14'
                // }

        },
        {
            flag: <FlagArgentina/>,
            title: 'Argentina',
            content:
                {
                    text: 'Ligue 1',
                    data: '6'
                },
                // {
                //     text: 'Ligue 2',
                //     data: '10'
                // }

        },
        {
            flag: <FlagAustralia/>,
            title: 'Australia',
            content:
                {
                    text: 'Ligue 1',
                    data: '1'
                },
                // {
                //     text: 'Ligue 2',
                //     data: '4'
                // }

        },
        {
            flag: <FlagAustria/>,
            title: 'Austria',
            content:
                {
                    text: 'Ligue 1',
                    data: '12'
                },
            // {
            //     text: 'Ligue 2',
            //     data: '4'
            // }

        },
        {
            flag: <FlagChile/>,
            title: 'Chile',
            content:
                {
                    text: 'Ligue 1',
                    data: '10'
                },
            // {
            //     text: 'Ligue 2',
            //     data: '4'
            // }

        },
        {
            flag: <FlagChina/>,
            title: 'China',
            content:
                {
                    text: 'Ligue 1',
                    data: '8'
                },
            // {
            //     text: 'Ligue 2',
            //     data: '4'
            // }

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
                {countryList.map((option) => (
                    <CountryItem
                        flag={option.flag}
                        title={option.title}
                        detailsText={option.content.text}
                        detailsData={option.content.data}
                    />
                ))}
                {/*<CountryItem />*/}
            </div>
        </section>
    </>
}

export default ContentSidebar