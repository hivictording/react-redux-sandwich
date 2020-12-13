import React from 'react'
import {ErrorMessage, useField} from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DateInput.css'

import Error from '../error'

function DateInput({name,label,...props}) {
    const [field,,helper] = useField(name)

    return (
        <div className="form-group">
            <label htmlFor={name} style={{display: "block"}}>{label}</label>
            <DatePicker id={name} {...field} {...props} 
            selected={field.value} 
            onChange={date => helper.setValue(date)} 
            className="form-control"/>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}

export default DateInput
