import React from 'react'
import {Field,ErrorMessage} from 'formik'
import Error from '../error'

function Radiobutton({name,label,options}) {
    return (
        <div className="form-group">
            <label >{label}</label>
                {
                    options.map(option => {
                        return (
                            <div className="form-check" key={option.value}>
                                <Field className="form-check-input" type='radio' name={name} id={option.value} value={option.value}/>
                                <label className="form-check-label" htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </div>
                        )
                    })
                }
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}

export default Radiobutton
