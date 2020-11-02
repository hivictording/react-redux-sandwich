import React from 'react'

const withForm = (WrappedComponent,formFields,formType,text) => {
    return (props) => {
        return (
            <WrappedComponent {...props} formFields={formFields} formType={formType} text={text}/>
        )
    }
}

export default withForm
