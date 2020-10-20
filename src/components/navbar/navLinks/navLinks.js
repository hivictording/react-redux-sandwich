import React from 'react';

import NavLink from '../navLink/navLink';
import classes from './navLinks.module.css';

const navLinks = () => {
    
    return (
        <div className={classes.navLinks}>
            <NavLink path="/" text="home"/>
            <NavLink path="/orders" text="orders"/>
            <NavLink path="/about" text="about"/>
            <NavLink path="/login" text="login"/>
        </div>
    )
}

export default navLinks
