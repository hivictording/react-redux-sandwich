import React from 'react'

import {FaCartPlus} from 'react-icons/fa'
import NavLink from '../../navLink/navLink'
import classes from './navCart.module.css'

const NavCart = () => {
    return (
        <NavLink path='/cart'>
            <div className={classes.cartIcon}>
                <FaCartPlus/>
            </div>
            
        </NavLink>
    )
}

export default NavCart
