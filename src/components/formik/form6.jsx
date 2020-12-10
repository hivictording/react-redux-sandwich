import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'

import FormikElement from './Elements/FormikElement'

const initValues = {
    name: '',
    hobbies: []
}
const handleSubmit = values => console.log("values",values)
const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    hobbies: Yup.array().of(Yup.string()).min(1,'required')
})

const hobbies = [
    {key:"travel",value:"travel"},
    {key:"fishing",value:"fishing"},
    {key:"watch movies",value:"movies"},
    {key:"reading books",value:"reading"},
    {key:"go shopping",value:"shopping"},
]

function form() {
    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Form className="w-75 mx-auto my-3">
                            <FormikElement control="input" name="name" label="Enter Name"/>
                            <FormikElement control="checkbox" name="hobbies" label="Your Hobbies" options={hobbies}/>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default form

