import React from 'react'

function FormikForm() {
    return (
        <form className="my-5 w-75 mx-auto">
            <div className="form-group">
                <label htmlFor="name">Enter name</label>
                <input type="text" name="name" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Enter address</label>
                <input type="text" name="address" className="form-control"/>
            </div>
        </form>
    )
}

export default FormikForm
