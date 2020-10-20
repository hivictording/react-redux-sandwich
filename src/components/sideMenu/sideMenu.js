import React from 'react'
import {FaTimes} from 'react-icons/fa'
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
            <div className={classes.sideMenuContent}>
                <div className={classes.sideMenuClose}>
                    <button onClick={clicked}><FaTimes/></button>
                </div>

                <div className={classes.sideMenuCenter}>
                    <NavLink path="/" text="home"/>
                    <NavLink path="/orders" text="orders"/>
                    <NavLink path="/about" text="about"/>
                    <NavLink path="/login" text="login"/>
                </div>
            </div>
        </div>
        
    )
}

export default SideMenu
