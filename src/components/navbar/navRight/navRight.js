import React from 'react'
import NavLogin from './navLogin/navLogin'
import NavCart from './navCart/navCart'
import NavLogout from './navLogout'

import classes from './navRight.module.css'

const NavRight = ({isAuthenticated,currentUser}) => {

    return (
        <div className={classes.NavRight}>
            {isAuthenticated || <NavLogin/>}
            {isAuthenticated && <NavLogout currentUser={currentUser}/>}
            <NavCart/>
        </div>
    )
}

export default NavRight
