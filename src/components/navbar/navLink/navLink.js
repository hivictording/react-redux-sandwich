import React from 'react'
import {NavLink} from 'react-router-dom';

import classes from './navLink.module.css';

const navLink = ({path,text,children,clicked}) => {
    return (
    <NavLink className={classes.navLink} activeClassName={classes.active} exact to={path} onClick={clicked}>
        {text}
        {children}
        </NavLink>
    )
}

export default navLink
