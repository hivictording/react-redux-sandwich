import React from 'react'
import NavLogin from './navLogin/navLogin'
import NavCart from './navCart/navCart'

import classes from './navRight.module.css'

const NavRight = () => {
    return (
        <div className={classes.NavRight}>
            <NavLogin/>
            <NavCart/>
        </div>
    )
}

export default NavRight
