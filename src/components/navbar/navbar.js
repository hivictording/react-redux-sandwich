import React, { Component } from 'react'

import classes from "./navbar.module.css";

import Logo from '../logo'
import NavLinks from './navLinks/navLinks'

export default class NavBar extends Component {
    render() {
        return (
            <div className={classes.navbar}>
                <Logo size="small"/>
                <NavLinks/>
            </div>
        )
    }
}
