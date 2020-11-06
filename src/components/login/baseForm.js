import React, { Component } from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {cloneDeep} from 'lodash'

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
        // formFields: this.props.formFields.map(formField => {
        //     return {...formField}
        // })
        formFields: cloneDeep(this.props.formFields)
    }

    fieldRefs = [];

    addRefHandler = (field) => {
        if (!field) return;

        switch (field.tagName) {
            case ('INPUT'): {
                if (field.type === 'text' || field.type === 'password' || field.type === 'email') {
                    if (!this.fieldRefs.find(f => f.name === field.name)) {
                        this.fieldRefs = [...this.fieldRefs,field];
                    }
                } else if (field.type === 'radio') {
                    if (!this.fieldRefs.find(f => f.name === field.name && f.value === field.value)) {
                        this.fieldRefs = [...this.fieldRefs,field];
                    }
                }
            break;
            }

            case ('SELECT'): {
                break;
            }

            default: {
                return
            }
        }


        
    }

    changeHandler = (event) => {
        if (event.target.tagName === 'INPUT') {
            const currentField = this.state.formFields.find(field => field.name === event.target.name || field.fieldConfig.name === event.target.name);
            const filteredFields = this.state.formFields.filter(field => field.name !== currentField.name);
            currentField.value = event.target.value;
                
            this.setState({
                ...this.state,
                formFields:[...filteredFields,currentField]
            }) 
        } else if (event.target.tagName === 'SELECT') {
            return
        }
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

    formReset = () => {

        const formFields = cloneDeep(this.state.formFields)

        const updatedFormfields = formFields.map(field => {
            return {...field, value: ''}
        });

        this.setState({
            formFields: updatedFormfields
        })

        this.fieldRefs[0].focus();
    }

    resetHandler = (event) => {
        event.preventDefault();
        this.formReset()
    }

    submitHandler = (event) => {
        event.preventDefault();

        if(this.checkForm()) {
            
            if (this.props.formType === "register") {
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

        }
    }

    componentDidMount() {
        console.log(this.fieldRefs)
        
        this.fieldRefs[0].focus();
    }

    render() {
        if (!(this.props.formType === 'order') && !this.props.currentUser.error && Object.entries(this.props.currentUser.user).length >=1) {
            return <Redirect to="/"/>
        }
        const sortedFields = this.state.formFields.sort((a,b)=>a.id < b.id ? -1 : 1)

        if (this.props.currentUser.loading) {
            return <Spinner/>
        }

        return (
            <div className="row">
                <div className={`${classes.form} col-10 col-md-9 col-lg-7 mx-auto py-2 px-4`}>
                    <form className='my-3'>
                        {sortedFields.map((field) => {
                            return <Input {...field} changed={this.changeHandler} addRef={this.addRefHandler} key={field.id}/>
                                
                        })}

                        {this.props.currentUser.error && <p className="text-danger text-capitalize">username or password is not correct...</p>}
                        
                        <div className="w-100 d-flex justify-content-between">
                            <Button  size="medium" clicked={this.submitHandler}>
                                {this.props.formType}
                            </Button>
                            <Button size="medium" clicked={this.resetHandler}>
                                reset
                            </Button>
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
