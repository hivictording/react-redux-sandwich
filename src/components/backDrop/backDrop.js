import React from 'react'

import classes from './backDrop.module.css'

const backDrop = ({clicked}) => {

    return (
        <div className={classes.backDrop} onClick={clicked}></div>
    )
}

export default backDrop
