import React from 'react'

import {Formik,Form,Field,ErrorMessage} from 'formik'

// using Formik,Form,Field,ErrorMessage Component

export default function FormikForm() {
    const initValues = {
        name: '',
        address: ''
    }
    const validate = values => {
        let errors = {}
        if (!values.name.trim()) {
            errors.name = 'name required'
        }

        if (!values.address.trim()) {
            errors.address = 'address required'
        }

        return errors
    }

    const handleSubmit = values => {
        console.log(values)
    }

    return (
        <Formik initialValues={initValues} validate={validate} onSubmit={handleSubmit}>
            <Form className="my-3 mx-auto w-50">
                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <Field name="name" className="form-control"/>
                    <ErrorMessage name="name" className="text-warning"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Enter Address</label>
                    <Field name="address" className="form-control"/>
                    <ErrorMessage name="address" className="text-primary"/>
                </div>
            </Form>
        </Formik>
    )
}