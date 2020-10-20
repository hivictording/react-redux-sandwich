import React from 'react'
import NavLink from '../navbar/navLink/navLink';
import BackDrop from '../../components/backDrop';

import classes from './sideMenu.module.css'

const SideMenu = ({clicked}) => {
    return (
        <div className={classes.sideMenu}>
            <BackDrop clicked={clicked}/>
            <div className={classes.sideMenuCenter}>
                <NavLink path="/" text="home"/>
                <NavLink path="/orders" text="orders"/>
                <NavLink path="/about" text="about"/>
            </div>
        </div>
        
    )
}

export default SideMenu
