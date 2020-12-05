import React from 'react'
import {useFormik} from 'formik';

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: ''
        },
        onSubmit: values => console.log(values)
    })

    return (
        <form className="my-5 w-50 mx-auto" onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Enter name</label>
                <input type="text" name="name" className="form-control" onChange={formik.handleChange} value={formik.values.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Enter address</label>
                <input type="text" name="address" className="form-control" onChange={formik.handleChange} value={formik.values.address}/>
            </div>
            <input type="submit" className="form-control"/>
        </form>
    )
}

export default FormikForm
