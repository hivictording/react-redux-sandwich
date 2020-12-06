import React from 'react'

import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

import Error from './error'

// using Formik,Form,Field,ErrorMessage Component
// using yup for validation
// nested object

export default function FormikForm() {
    const initValues = {
        name: '',
        fullName: {
            firstName: '',
            lastName: ''
        },
        email: '',
        address: '',
        createdOn: '',
        comments: ''
    }
    const validate = values => {
        let errors = {}
        if (!values.name.trim()) {
            errors.name = 'name required'
        }

        if (!values.email.trim()) {
            errors.email = 'address required'
        }

        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().trim().required('name required').min(3,'min lenth: 3').max(5,"max length: 5"),
        fullName: Yup.object().shape({
            firstName: Yup.string().required('first name required'),
            lastName: Yup.string().required('last name required')
        }),
        email: Yup.string().trim().email('invalid email format').required('email required'),
        address: Yup.string().required('address required').min(3,'min length 3'),
        createdOn: Yup.date().default(() => new Date()),
        comments: Yup.string()
    })

    const handleSubmit = values => {
        console.log(values)
    }

    return (
        <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {/* <Formik initialValues={initValues} validate={validate} onSubmit={handleSubmit}> */}
            <Form className="my-3 mx-auto w-50">
                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <Field name="name" id="name" className="form-control"/>
                    <ErrorMessage name="name" component={Error}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Enter First Name</label>
                    <Field name="fullName.firstName" id="firstName" className="form-control"/>
                    <ErrorMessage name="fullName.firstName" component={Error}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Enter Last Name</label>
                    <Field name="fullName.lastName" id="lastName" className="form-control"/>
                    <ErrorMessage name="fullName.lastName" component={Error}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Email</label>
                    <Field name="email" type="email" className="form-control"/>
                    {/* ErrorMessage component customize */}
                    <ErrorMessage name="email">
                        {error => {
                            return <div className="text-danger text-capitalize">{error}</div>
                        }}
                    </ErrorMessage>
                </div>

                {/* Field component props */}
                <div className="form-group">
                    <label htmlFor="address">Enter Address</label>
                    <Field name="address">
                        {
                            (props) => {
                                const {field,form,meta} = props;
                                console.log(props);
                                return (
                                    <div>
                                        <input className="form-control" {...field}/>
                                        {meta.touched && meta.error && meta.error}
                                    </div>
                                )
                            }
                        }
                    </Field>
                    {/* <ErrorMessage name="address" className="text-primary"/> */}
                </div>
                <div className="form-group">
                    <label htmlFor="createdOn">Created On</label>
                    <Field name="createdOn" type="date" className="form-control"/>
                    <ErrorMessage name="createdOn" className="text-primary"/>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" name="comments" className="form-control"/>
                    <ErrorMessage name="comments"/>
                </div>

                <input type="submit" className="form-control"/>
            </Form>
        </Formik>
    )
}