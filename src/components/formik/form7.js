import React from 'react'
import {Formik,Form,useField} from 'formik'
import * as Yup from 'yup'

const initValues = {
    firstName: '',
    age:'',
    adult: false,
}

const handleSubmit = values => console.log(values)

const validationSchema = Yup.object({
    firstName: Yup.string().required('required'),
    age: Yup.number().required('required').integer('must be an integer').positive('must greater than 0'),
    adult: Yup.boolean().required('required')
})



const TextField = ({label,...props}) => {
    // this will return field props for that field
    // you can also use useField(props.name)
    const [field,meta,helper] = useField(props);
    const [,,adultHelper] = useField('adult')

    return (
        <div className="form-group">
            <label htmlFor={field.name}>{label}</label>
            {/* <input id={field.name} {...field} {...props}/> */}
            {field.name === 'age' ? <input id={field.name} {...field} {...props} onChange={(event) => {
                helper.setValue(event.target.value)
                if (event.target.value >=18) {
                    adultHelper.setValue(true)
                } else {
                    adultHelper.setValue(false)   
                }
                }}/> : <input id={field.name} {...field} {...props}/>}
            {meta.touched && meta.error && <div className="text-danger">{meta.error}</div>}
        </div>
    )
}
// const TextField = ({name,label,...props}) => {
//     const [field] = useField(name);

//     return (
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//             <input id={name} {...field} {...props} />
//         </div>
//     )
// }

function form7() {
    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {
                formik => {
                    return (
                        <Form className="w-50 mx-auto my-3">
                            <TextField type="text" name="firstName" label="First Name" age={30} gender="male" className="form-control"/>
                            <TextField type="text" name="age" label="Your Age" className="form-control"/>
                            <TextField type="checkbox" name="adult" label="Adult" className="form-control"/>
                            <button className="btn btn-info">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default form7
