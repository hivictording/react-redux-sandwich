import React, { Component } from 'react'

import classes from "./navbar.module.css";

import Logo from '../logo'
import NavLinks from './navLinks/navLinks'
import ToggleMenu from '../sideMenu/toggleMenu'
import SideMenu from '../sideMenu/sideMenu'

export default class NavBar extends Component {
    state = {
        showBar: true,
    }

    handleShowBar = () => {
        this.setState((prevState) => {
            return {...this.state,showBar: !this.state.showBar}
        })
    }
    render() {
        return (
            <div className={classes.navbar}>
                <Logo size="small"/>
                <NavLinks/>
                <ToggleMenu {...this.state} clicked={this.handleShowBar}/>
                {/* {this.state.showBar || <SideMenu clicked={this.handleShowBar}/>} */}

                {/* implementing SideMenu Transition */}
                <SideMenu clicked={this.handleShowBar} show={!this.state.showBar}/>
            </div>
        )
    }
}
