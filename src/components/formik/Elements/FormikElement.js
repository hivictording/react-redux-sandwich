import React from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import RadioButton from './RadioButton'
import Textarea from './Textarea'

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
        default:
            return null
    }
}

export default FormikElement
