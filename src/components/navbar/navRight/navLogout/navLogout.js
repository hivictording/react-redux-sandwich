import React from 'react'
import Button from '../../../../UI/Button'
import classes from './navLogout.module.css'

const navLogout = ({currentUser,logout}) => {
    return (
        <div className={classes.navLogout}>
            <div className={classes.currentUserWrapper}>
                <span>Hello,</span>
                <button className={classes.currentUser}>{currentUser}</button>
            </div>
            <Button clicked={logout}>logout</Button>
        </div>
    )
}

export default navLogout
