import React from 'react'
import Sandwich from '../../static/images/logo.png'

import classes from './logo.module.css';

const Logo = ({size}) => {
    return (
        <div className={classes.logo}>
            <img className={classes[size]} src={Sandwich} alt="Sandwich Logo"/>
        </div>
    )
}

export default Logo;
