import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import FormikElement from './Elements/FormikElement'

const initValues = {
    name: '',
    hobbies: [],
    comments: '',
    deliveryDay: '',
    country: [],
    startDate: '',
}
const handleSubmit = values => console.log("values",values)
const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    hobbies: Yup.array().of(Yup.string()).min(1,'required'),
    comments: Yup.string(),
    deliveryDay: Yup.string().required('required'),
    country: Yup.array().of(Yup.string()).min(1,'required'),
    startDate: Yup.date().required('required'),
})

const hobbies = [
    {key:"travel",value:"travel"},
    {key:"fishing",value:"fishing"},
    {key:"watch movies",value:"movies"},
    {key:"reading books",value:"reading"},
    {key:"go shopping",value:"shopping"},
]

const deliveryDays = [
    {key:"Monday",value:"monday"},
    {key:"Tuesday",value:"tuesday"},
    {key:"Wednesday",value:"wednesday"},
    {key:"Thursday",value:"thursday"},
    {key:"Friday",value:"friday"},
]

const countries = [
    {key:"Canada",value:'ca'},
    {key:"China",value:'cn'},
    {key:"USA",value:'us'},
    {key:"United Kingdom",value:'uk'},
]

function Form6() {
    

    // console.log('start date:',startDate)
    // console.log('end date:',endDate)
    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Form className="w-75 mx-auto my-3">
                            <FormikElement type="input" name="name" label="Enter Name"/>
                            <FormikElement type="date" name="startDate" label="Start Date" />
                            
                            <FormikElement type="select" name="country" label="Where do you live?" options={countries} multiple={true}/>
                            <FormikElement type="radio" name="deliveryDay" label="Select Your Delivery Day" options={deliveryDays}/>
                            <FormikElement type="checkbox" name="hobbies" label="Your Hobbies" options={hobbies}/>
                            <FormikElement type="textarea" name="comments" label="Comments"/>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Form6


