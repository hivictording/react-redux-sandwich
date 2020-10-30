import React, { Component } from 'react'

import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classes from './loginForm.module.css'

class LoginForm extends Component {
    state = {
        formFields: [
            {
                id:1,
                name: 'username',
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Enter your username'
                },
                value:'',
                rules:[
                    {isRequired: true},
                    {minLength: 5},
                    {maxLength: 10},
                ],
                isValid: false
            },
            {
                id:2,
                name: 'email',
                fieldType: 'input',
                fieldConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value:'',
                rules:[
                    {isRequired: true},
                ],
                isValid: false
            },
            {
                id:3,
                name: 'password',
                fieldType: 'input',
                fieldConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value:'',
                rules:[
                    {isRequired: true},
                    {minLength: 6},
                    {maxLength: 12},
                ],
                isValid: false
            },
        ]
    }

    changeHandler = (event) => {
        const currentField = this.state.formFields.find(field => field.name === event.target.name);
        const filteredFields = this.state.formFields.filter(field => field.name !== event.target.name);
        currentField.value = event.target.value;
        
        this.setState({
            ...this.state,
            formFields:[...filteredFields,currentField]
        })
    }

    render() {
        const sortedFields = this.state.formFields.sort((a,b)=>a.id < b.id ? -1 : 1)

        return (
        <div className="row">
            <div className={`${classes.form} col-10 col-md-8 col-lg-6 mx-auto py-2 px-4`}>
                <h5 className="text-center text-capitalize">create your account</h5>
                <form className='my-3'>
                    {sortedFields.map((field) => {
                        return <Input {...field} changed={this.changeHandler} key={field.id}/>
                               
                    })}
                    
                    <div className="w-100">
                        <Button size="large">Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}

export default LoginForm
