import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray, useField} from 'formik'
import * as Yup from 'yup'
import './form4.css'
import Error from './error'

//  using FieldArray with saveValues() function

const initValues = {
    // numberOfTickets: '',
    // tickets: []
    numberOfTickets: 1,
    tickets: [{name:'',email:''}]
}

const savedValues = {
    numberOfTickets: 1,
    tickets: [{name:'vding',email:'aaa@test.com'}]
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


const onChangeHandler = (event,values,setValues) => {
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
}

// setSubmitting to false after submit
const handleSubmit = (values,onSubmitProps) => {
    console.log(values,onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

export default () => {
    const [savedForms, setSavedForms] = React.useState(null)

    return (
        <Formik initialValues={savedForms || initValues} 
                validationSchema={validationSchema} 
                onSubmit={handleSubmit}
                validateOnChange={false}
                // validateOnBlur={false}
                validateOnMount
                enableReinitialize
                >
            {(formik) => {
                // console.log(formik)
                return (
            <Form className="w-75 mx-auto my-3">
                        <div className="form-group">
                            <label htmlFor="numberOfTickets">How many tickets do you want to buy?</label>
                            <Field name="numberOfTickets">
                                {(props) => {
                                    console.log(props)
                                    const {form,field} = props;
                                    const {values,setValues} = form;
                                    
                                    const handleChange = (event) => {
                                        onChangeHandler(event,values,setValues)
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
                                    const {form} = props;
                                    const {values:{tickets}} = form;

                                    return tickets.map((ticket,index) => {
                                        return (
                                            <div key={index} className="row align-items-center">
                                                <div className="form-group col-3">
                                                    <label htmlFor={`name${index}`}>Enter Name</label>
                                                    <Field id={`name${index}`} name={`tickets[${index}].name`} className="form-control"/>
                                                    <ErrorMessage name={`tickets[${index}].name`}>
                                                        {error => {
                                                            return <span>{error}</span>
                                                        }}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor={`email${index}`}>Enter Email</label>
                                                    <Field id={`email${index}`} name={`tickets[${index}].email`} className="form-control"/>
                                                    <ErrorMessage name={`tickets[${index}].email`} component={Error}/>
                                                </div>
                                                <button type="button" className="btn btn-info form-control col-2 mr-2" onClick={() => {
                                                    // console.log(`checking name${index}`)
                                                    // setFieldTouched doesn't work well with nested objects
                                                    form.setFieldTouched(`tickets[${index}].name`);
                                                    form.validateField(`tickets[${index}].name`);
                                                }}>check-name</button>
                                                <button type="button" className="btn btn-info form-control col-2" onClick={() => {
                                                    // console.log(`checking email${index}`)
                                                    
                                                    form.setFieldTouched(`tickets[${index}].email`);
                                                    form.validateField(`tickets[${index}].email`);
                                                }}>check-email</button>
                                                {/* <button type="button" className="btn-info form-control col-2" onClick={() => {
                                                    console.log(`visiting both${index}`)
                                                    
                                                    form.setTouched({
                                                        tickets:{}: true,
                                                        // tickets[index].email: true
                                                    })

                                                }}>visit-both</button> */}
                                            </div>
                                        )
                                    })
                                }
                            }
                        </FieldArray>
                        <button type="button" className="btn btn-warning mb-2" onClick={() => setSavedForms(savedValues)}>Load Saved Data</button>
                        <button type="reset" className="btn btn-warning ml-2 mb-2" >Reset Form</button>
                        <input type="submit" className="form-control" disabled={!formik.isValid || formik.isSubmitting}/>
                    </Form>
            )}}
        </Formik>
    )
}