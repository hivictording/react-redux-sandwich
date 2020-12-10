import React from 'react'
import {ErrorMessage, Field} from 'formik'
import Error from '../error'

function Checkbox({name,label,options}) {
    return (
        <div className="form-group">
            <label >{label}</label>
                {
                    options.map(option => {
                        return (
                            <div className="form-check" key={option.value}>
                                <Field className="form-check-input" type='checkbox' name={name} id={name} value={option.value}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
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

export default Checkbox
