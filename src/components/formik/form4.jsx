import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'

import Error from './error'

//  using FieldArray with saveValues() function

const initValues = {
    // numberOfTickets: '',
    // tickets: []
    numberOfTickets: 1,
    tickets: [{name:'',email:''}]
}

const validationSchema = Yup.object().shape({
    numberOfTickets: Yup.number('must be a number').required('number of tickets required').integer('must be an integer').positive('must be greater than zero'),
    tickets: Yup.array().of(
        Yup.object().shape({
            name: Yup.string('must be a string').required('name required'),
            email: Yup.string('must be a string').required('email required').email('invalid email format')
        })
    )
})

const handleSubmit = values => console.log(values)

export default () => {
    return (
        <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {/* {({ values, setValues }) => ( */}
            <Form className="w-75 mx-auto my-3">
                        <div className="form-group">
                            <label htmlFor="numberOfTickets">Number of Tickets</label>
                            <Field name="numberOfTickets">
                                {(props) => {
                                    const {form,field} = props;
                                    const {values,setValues} = form;
                                    
                                    const handleChange = (event) => {
                                        const originalNumber = values.tickets.length;
                                        const originalTickets = [...values.tickets];
                                        const currentNumber = event.target.value;
                                        let newTicketsArray
                                        let currentTickets
                                    
                                        if (!event.target.value) {
                                            setValues({...values,numberOfTickets:event.target.value})
                                            return
                                        }

                                        if (currentNumber > originalNumber) {
                                            const diff = currentNumber - originalNumber;
                                            newTicketsArray = [...new Array(diff)].map((item) => {
                                                return {name:'',email:''}
                                            })
                                            currentTickets = [...originalTickets,...newTicketsArray]
                                        } else if (currentNumber <= originalNumber) {
                                            newTicketsArray = originalTickets.filter((item,index) => {
                                                return index <= currentNumber - 1
                                            })
                                            currentTickets = [...newTicketsArray]
                                        }

                                        setValues({...values,
                                            numberOfTickets:currentNumber,
                                            tickets:currentTickets})

                                        // field.onChange(event)
                                    }
                                    
                                    return (
                                        <input {...field} className="form-control" onChange={handleChange}/>
                                    )
                                }}
                            </Field>
                            <ErrorMessage name="numberOfTickets"/>
                        </div>
                        <FieldArray name="tickets">
                            {
                                props => {
                                    const {form:{values:{tickets}}} = props;
                                    return tickets.map((ticket,index) => {
                                        return (
                                            <div key={index}>
                                                <div className="form-group">
                                                    <label htmlFor={`name${index}`}>Enter Name</label>
                                                    <Field id={`name${index}`} name={`tickets[${index}].name`} className="form-control"/>
                                                    <ErrorMessage name={`tickets[${index}].name`}>
                                                        {error => {
                                                            return <span>{error}</span>
                                                        }}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`email${index}`}>Enter Email</label>
                                                    <Field id={`email${index}`} name={`tickets[${index}].email`} className="form-control"/>
                                                    <ErrorMessage name={`tickets[${index}].email`} component={Error}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            }
                        </FieldArray>
                        <input type="submit" className="form-control"/>
                    </Form>
            {/* )} */}
        </Formik>
    )
}