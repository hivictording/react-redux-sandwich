import React, { Component } from 'react'

import classes from "./navbar.module.css";

import Logo from '../logo'
import NavLinks from './navLinks/navLinks'
import NavRight from './navRight/navRight'
import ToggleMenu from '../sideMenu/toggleMenu'
import SideMenu from '../sideMenu/sideMenu'

export default class NavBar extends Component {
    state = {
        showBar: true,
    }

    prevClientWidth = +document.documentElement.clientWidth;
    currentClientWidth;

    componentDidMount() {
        // remove the sidemenu when resize the window back to less than 576px
        window.addEventListener('resize',() => {
            this.currentClientWidth = +document.documentElement.clientWidth;
            if (+this.currentClientWidth <= 578 && this.prevClientWidth > 578 && !this.state.showBar) {
                    this.setState({
                        ...this.state,
                        showBar: true
                    })
            }
            this.prevClientWidth = this.currentClientWidth;
        });
        return () => {
            console.log('remove listener');
            window.removeEventListener('resize');
        }
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
                <NavRight/>
                <ToggleMenu clicked={this.handleShowBar}/>
                {/* {this.state.showBar || <SideMenu clicked={this.handleShowBar}/>} */}

                {/* implementing SideMenu Transition */}
                <SideMenu clicked={this.handleShowBar} show={!this.state.showBar}/>
            </div>
        )
    }
}
