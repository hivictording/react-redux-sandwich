import React from 'react'

import classes from './button.module.css'

const Button = ({clicked,children}) => {
    return (
        <button className={classes.button} onClick={clicked}>
            {children}
        </button>
    )
}

export default Button
