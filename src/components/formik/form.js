import React from 'react'
import {useFormik} from 'formik';


// using useFormik hook
const validation = values => {
    let errors = {};
    if (!values.name.trim()) {
        errors.name = 'name required!'
    }
    if (!values.address.trim()) {
        errors.address = 'address required!'
    }

    return errors
}

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: ''
        },
        onSubmit: values => console.log(values),
        validate: validation
    })

    console.log(formik.errors);

    return (
        <form className="my-5 w-50 mx-auto" onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Enter name</label>
                <input type="text" name="name" className="form-control" 
                // onChange={formik.handleChange} 
                // onBlur={formik.handleBlur} 
                // value={formik.values.name}
                {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && <div className="text-warning">{formik.errors.name}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="address">Enter address</label>
                <input type="text" name="address" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}/>
                {formik.touched.address && formik.errors.address && <div className="text-warning">{formik.errors.address}</div>}
            </div>
            <input type="submit" className="form-control"/>
        </form>
    )
}

export default FormikForm
