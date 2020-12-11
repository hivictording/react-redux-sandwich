import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import RadioButton from './RadioButton'
import Textarea from './Textarea'
import Select from './Select'
import DateInput from './DateInput'

function FormikElement({type,...rest}) {
    switch (type) {
        case "input":
            return <Input {...rest}/>
        case "textarea":
            return <Textarea {...rest}/>
        case "checkbox":
            return <Checkbox {...rest}/>
        case "radio":
            return <RadioButton {...rest}/>
        case "select":
            return <Select {...rest}/>
        case "date":
            return <DateInput {...rest}/>
        default:
            return null
    }
}

export default FormikElement
