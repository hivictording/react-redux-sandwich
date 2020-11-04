import React from 'react'
import classes from './modal.module.css'

import Button from '../Button'

export default ({title,confirmText,cancelText,confirm,cancel}) => {
    return (
        <div className={classes.modal}>
            <div className="row">
                <div className="col-11 mx-auto mb-3 text-center">
                    {title}
                </div>
                <div className="col-10 mx-auto d-flex justify-content-around">
                    {confirmText && <Button clicked={confirm}>{confirmText}</Button>}
                    <Button clicked={cancel}>{cancelText}</Button>
                </div>
            </div>
        </div>
    )
}
