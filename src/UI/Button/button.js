import React from 'react'

import classes from './button.module.css'

const Button = ({clicked,disabled,children,size}) => {
    let classList = [classes.button];
    if (size === 'large') {
        classList.push(classes.large)
    }

    return (
        <button className={classList.join(' ')} onClick={clicked} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
