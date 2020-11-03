import React from 'react'
import NavLogin from './navLogin/navLogin'
import NavCart from './navCart/navCart'
import NavLogout from './navLogout'

import classes from './navRight.module.css'

const NavRight = ({isAuthenticated,currentUser,logout}) => {

    return (
        <div className={classes.NavRight}>
            {isAuthenticated || <NavLogin/>}
            {isAuthenticated && <NavLogout currentUser={currentUser} logout={logout}/>}
            <NavCart/>
        </div>
    )
}

export default NavRight
