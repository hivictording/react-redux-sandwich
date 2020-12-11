import React from 'react'
import {Field,ErrorMessage} from 'formik'

function Select({name,label,options,...rest}) {
    const updatedOptions = [{key:label,value:''},...options]

    if (rest.multiple) {
        return (
        <div className="form-group">
            <label>{label}</label>
            <Field as='select' name={name} {...rest} className="custom-select">
                {
                                        options.map(option => {
                                            return <option key={option.key} value={option.value}>{option.key}</option>
                                        })
                                    }
            </Field>
            
            <ErrorMessage name={name}/>
        </div>
        ) 
    } else {
        return (
        <div className="form-group">
            <Field as='select' name={name} {...rest} className="custom-select">
                {
                                        updatedOptions.map(option => {
                                            return <option key={option.key} value={option.value}>{option.key}</option>
                                        })
                                    }
            </Field>
            
            <ErrorMessage name={name}/>
        </div>
        )
        }
}

export default Select
