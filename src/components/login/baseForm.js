import React, { Component } from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classes from './baseForm.module.css'
import {userRegistration,userLogin} from '../../store/actions/user'
import {checkValidation} from '../../utils/formUtils'
import withAxios from '../../hoc/withAxios'
import axios from '../../utils/axios/axiosLocal'
import Spinner from '../../UI/Spinner'

class BaseForm extends Component {

    state = {
        formFields: this.props.formFields
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

    checkForm = () => {
        let currentState = {...this.state};
        currentState.formFields.forEach(field => {
            const {name,value,rules} = field;
            const remainingFields = currentState.formFields.filter(f => f.name !== field.name)
            const updatedField = {...field,error:checkValidation(name,value,rules)}
            const updatedFormFields = [...remainingFields,updatedField]
            currentState = {...currentState,formFields:updatedFormFields}
        })

        if (currentState.formFields.some(field => field.error.status)) {
            this.setState(currentState);
            return false;
        };

        this.setState(currentState);
        return true;   
    }

    submitHandler = (event) => {
        event.preventDefault();

        if(this.checkForm()) {
            
            if (this.props.formType === "registration") {
                const username = this.state.formFields.find(field => field.name==='username').value;
                const email = this.state.formFields.find(field => field.name==='email').value;
                const password = this.state.formFields.find(field => field.name==='password').value;
                console.log(username,email,password);
                this.props.userRegistration({username,email,password})
            } else if (this.props.formType === "login") {
                const username = this.state.formFields.find(field => field.name==='username').value;
                const password = this.state.formFields.find(field => field.name==='password').value;
                this.props.userLogin(username,password)
            }

            // this.props.history.push('/');
        }
    }

    render() {
        if (!this.props.currentUser.error && Object.entries(this.props.currentUser.user).length >=1) {
            return <Redirect to="/"/>
        }
        const sortedFields = this.state.formFields.sort((a,b)=>a.id < b.id ? -1 : 1)

        return (
            <div className="row">
                <div className={`${classes.form} col-10 col-md-9 col-lg-7 mx-auto py-2 px-4`}>
                    <form className='my-3'>
                        {sortedFields.map((field) => {
                            return <Input {...field} changed={this.changeHandler} key={field.id}/>
                                
                        })}

                        {this.props.currentUser.error && <p className="text-danger text-capitalize">username or password is not correct...</p>}
                        
                        <div className="w-100">
                            <Button size="large" clicked={this.submitHandler}>login</Button>
                        </div>
                        <div className={classes.buttonSubmitWrapper}>
                            <button className={classes.buttonSubmit} onClick={this.props.newUserHandler}>   {this.props.text}
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user
    }
}
export default withRouter(withAxios(connect(mapStateToProps,{userRegistration,userLogin})(BaseForm),axios))
