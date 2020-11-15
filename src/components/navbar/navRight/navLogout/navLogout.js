import React from 'react'
import {withRouter} from 'react-router-dom'
import Button from '../../../../UI/Button'
import classes from './navLogout.module.css'

const navLogout = ({currentUser,logout,history}) => {
    const userLogout = () => {
        logout();
        history.replace('/');
    }

    return (
        <div className={classes.navLogout}>
            <div className={classes.currentUserWrapper}>
                <span>Hello,</span>
                <button className={classes.currentUser}>{currentUser}</button>
            </div>
            <Button clicked={userLogout}>logout</Button>
        </div>
    )
}

export default withRouter(navLogout)
