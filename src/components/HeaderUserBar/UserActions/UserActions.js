import React from "react";
import {UserActionSearch, UserActionTransaction, UserActionHistory} from "../../../assets/imgComponents/userBarActions";
import styles from './user-actions.module.scss'

const UserActions = () => {

    return <>
        <div className={`user-bar-actions ${styles.userActions}`}>
            <a href="/" className={`${styles.userActionButton}`}>
                <UserActionSearch/>
            </a>
            <a href="/" className={`${styles.userActionButton}`}>
                <UserActionTransaction/>
            </a>
            <a href="/" className={`${styles.userActionButton}`}>
                <UserActionHistory/>
            </a>
        </div>
    </>
}

export default UserActions