import React from 'react'

import classes from './button.module.css'

const Button = ({clicked,disabled,children}) => {
    return (
        <button className={classes.button} onClick={clicked} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
