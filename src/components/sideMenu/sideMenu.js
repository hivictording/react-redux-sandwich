import React from 'react'
import NavLink from '../navbar/navLink/navLink';
import BackDrop from '../../components/backDrop';

import classes from './sideMenu.module.css'

const SideMenu = ({clicked,show}) => {
    let classList = [classes.sideMenu];
    if (!show) {
        classList.push(classes.hide);
    }
    classList = classList.join(' ');

    return (
        <div className={`${classList}`}>
            <BackDrop clicked={clicked}/>
            <div className={classes.sideMenuCenter}>
                <NavLink path="/" text="home"/>
                <NavLink path="/orders" text="orders"/>
                <NavLink path="/about" text="about"/>
                <NavLink path="/login" text="login"/>
            </div>
        </div>
        
    )
}

export default SideMenu
