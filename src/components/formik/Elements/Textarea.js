import React from 'react'
import {Field,ErrorMessage} from 'formik'
import Error from '../error'

function Textarea({name,label,...rest}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} className="form-control"/>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}

export default Textarea
