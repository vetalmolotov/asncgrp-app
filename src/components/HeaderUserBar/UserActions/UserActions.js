import React from "react";
import {UserActionSearch, UserActionTransaction, UserActionHistory} from "../../../assets/imgComponents/userBarActions";
import styles from './user-actions.module.scss'

const UserActions = () => {

    const userActionItem = [
        {
            id: '0',
            url: '/',
            icon: <UserActionSearch/>
        },
        {
            id: '1',
            url: '/',
            icon: <UserActionTransaction/>
        },
        {
            id: '2',
            url: '/',
            icon: <UserActionHistory/>
        }
    ]

    return <>
        <div className={`user-bar-actions ${styles.userActions}`}>
            {userActionItem.map((option) => (
                <a key={option.id}
                   href={option.url}
                   className={`${styles.userActionButton}`}>
                    {option.icon}
                </a>
            ))}
        </div>
    </>
}

export default UserActions