import React from 'react'
import {NavLink} from 'react-router-dom';

import classes from './navLink.module.css';

const navLink = ({path,text}) => {
    return (
    <NavLink className={classes.navLink} activeClassName={classes.active} exact to={path}>{text}</NavLink>
    )
}

export default navLink
