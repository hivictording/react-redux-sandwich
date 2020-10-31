import React, { Component } from 'react'
import classes from './login.module.css'

import LoginForm from '../components/login/loginForm'
import RegisterForm from '../components/login/registerForm'

export default class Login extends Component {

    state ={
        isNewUser: false,
    }

    newUserHandler = () => {
        this.setState((prevState) => {
            return {...prevState, isNewUser: !prevState.isNewUser}
        })
    }

    render() {
        return (
            <div className={`${classes.login} container py-4`}>
                {this.state.isNewUser || <LoginForm newUserHandler={this.newUserHandler}/>}
                {this.state.isNewUser && <RegisterForm newUserHandler={this.newUserHandler}/>}
            </div>
        )
    }
}
