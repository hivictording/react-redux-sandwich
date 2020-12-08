import React from 'react'
import {Formik,Form,Field,FieldArray,ErrorMessage} from 'formik'
import * as Yup from 'yup'

//  using FieldArray

const initValues = {
    tickets: [{name:"",email:""}]
}

const validationSchema = Yup.object({
    tickets: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('name required'),
            email: Yup.string().required('email required').email('invalid email format')
        })
    )
})

const handleSubmit = values => console.log(values)

function form3() {
    return (
        <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className="container-fluid w-100 mx-auto my-3">
                <FieldArray name="tickets">
                    {
                        (props) => {
                            const {form:{values:{tickets}},push,remove} = props

                            return tickets.map(index => {
                                return <div className="row align-items-center justify-content-around" key={index}>
                                            <div className="form-group col-4">
                                                <label htmlFor={`name${index}`}>Enter Name</label>
                                                <Field name={`tickets[${index}].name`} id={`name${index}`} className="form-control"/>
                                                <ErrorMessage name={`tickets[${index}].name`} />
                                            </div>
                                            <div className="form-group col-4">
                                                <label htmlFor={`email${index}`}>Enter Email</label>
                                                <Field name={`tickets[${index}].email`} id={`email${index}`} className="form-control"/>
                                               <ErrorMessage name={`tickets[${index}].email`} /> 
                                            </div>
                                            <button className="btn-secondary col-2" onClick={() => push({name:"",email:""})}>Add</button>
                                            <button className="btn-secondary col-2" onClick={() => remove(index)}>Remove</button> 
                                        </div>
                            })
                        }
                        
                    }
                </FieldArray>
                <input type='submit' className="form-control"/>
            </Form>
        </Formik>
    )
}

export default form3
