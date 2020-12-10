import React from 'react'
import {Field,ErrorMessage} from 'formik'
import Error from '../error'


function Input({name,label,...rest}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} className="form-control"/>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}

export default Input
