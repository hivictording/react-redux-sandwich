import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import classes from './toggleMenu.module.css';

const ToggleMenu = ({showBar,clicked}) => {
    return (
        <button className={classes.toggleMenu} onClick={clicked}>
            {showBar ? <FaBars/> : <FaTimes/>}
        </button>
    )
}

export default ToggleMenu
