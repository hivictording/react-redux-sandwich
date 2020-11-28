import React from 'react'
import { FaBars } from "react-icons/fa";

import classes from './toggleMenu.module.css';

const ToggleMenu = ({clicked}) => {
    return (
        <button className={classes.toggleMenu} onClick={clicked} >
            <FaBars/>
        </button>
    )
}

export default ToggleMenu
