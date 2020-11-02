import React from 'react'
import Button from '../../../../UI/Button'
import classes from './navLogout.module.css'

const navLogout = ({currentUser}) => {
    return (
        <div className={classes.navLogout}>
            <div className={classes.currentUserWrapper}>
                <span>Hello,</span>
                <button className={classes.currentUser}>{currentUser}</button>
            </div>
            <Button>logout</Button>
        </div>
    )
}

export default navLogout
