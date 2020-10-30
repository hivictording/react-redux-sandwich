import React, { Component } from 'react'
import classes from './login.module.css'

import LoginForm from '../components/loginForm'

export default class Login extends Component {

    render() {
        return (
            <div className={`${classes.login} container py-4`}>
                <LoginForm/>
            </div>
        )
    }
}
