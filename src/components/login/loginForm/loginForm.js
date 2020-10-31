import React, { Component } from 'react'

import Button from '../../../UI/Button/button'
import Input from '../../../UI/Input/input'
import classes from './loginForm.module.css'

import {checkValidation} from '../../../utils/formUtils'

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
                error: {}
            },
            {
                id:2,
                name: 'password',
                fieldType: 'input',
                fieldConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value:'',
                rules:[
                    {isRequired: false},
                    {minLength: 6},
                    {maxLength: 12},
                ],
                error: {}
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

    submitHandler = (event) => {
        console.log('submitted!');
        event.preventDefault();

        let currentState = {...this.state};
        currentState.formFields.forEach(field => {
            const {name,value,rules} = field;
            const remainingFields = currentState.formFields.filter(f => f.id !== field.id)
            const updatedField = {...field,error:checkValidation(name,value,rules)}
            const updatedFormFields = [...remainingFields,updatedField]
            currentState = {...currentState,formFields:updatedFormFields}
        })
        
        this.setState(currentState)
    }

    render() {
        const sortedFields = this.state.formFields.sort((a,b)=>a.id < b.id ? -1 : 1)

        return (
        <div className="row">
            <div className={`${classes.form} col-10 col-md-8 col-lg-6 mx-auto py-2 px-4`}>
                <form className='my-3'>
                    {sortedFields.map((field) => {
                        return <Input {...field} changed={this.changeHandler} key={field.id}/>
                               
                    })}
                    
                    <div className="w-100">
                        <Button size="large" clicked={this.submitHandler}>login</Button>
                    </div>
                    <div className={classes.buttonSignupWrapper}>
                        <button className={classes.buttonSignup} onClick={this.props.newUserHandler}>new user? sign up!</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
    }
}

export default LoginForm
