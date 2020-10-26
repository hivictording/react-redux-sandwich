import React from 'react'
// import NavLink from '../../navLink/navLink'
import {Link} from 'react-router-dom'

import Button from '../../../../UI/Button'
import classes from './navLogin.module.css'

const NavLogin = () => {
    return (
        <Link to="/login">
            <Button className={classes.button}>   
                login     
            </Button>
        </Link>
    )
}

export default NavLogin
