import React from "react";
import styles from './user-profile.module.scss'

const UserProfile = () => {

    return <>
        <div className={`user-bar-profile ${styles.userProfile}`}>
            <h4>800,000.00CFD</h4>
            <p></p>
            <h4>testuser12</h4>
        </div>
    </>
}

export default UserProfile