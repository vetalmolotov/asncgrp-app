import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-sidebar.scss'
import ButtonHeaderContent from "../../buttons/btnHeaderContent";

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

    return <>
        <section className="app-content-sidebar content-sidebar">
            <HeaderContent>
                {sidebarHeaderItem.map((option) => (
                    <ButtonHeaderContent
                        key={option.id}
                        className={`${option.isActive === true ? 'active' : ''}`}
                    >
                        {option.text}
                    </ButtonHeaderContent>
                ))}
                {/*<ButtonHeaderContent>tedt</ButtonHeaderContent>*/}
                {/*<ButtonHeaderContent>test</ButtonHeaderContent>*/}
            </HeaderContent>
            <p>section</p>
        </section>
    </>
}

export default ContentSidebar