import React from 'react'
import {shallow} from 'enzyme'
import Login from './login'
import LoginForm from '../components/login/loginForm'
import RegisterForm from '../components/login/registerForm'

const setUp = (props = {}) => {
    return shallow(
        <Login {...props}/>
    )
}

describe('login test suite',() => {
    let component

    beforeEach(() => {
        component = setUp()
    })

    it('should render login form by default', () => {
        const wrapper = component.find(LoginForm);
        expect(wrapper.length).toBe(1)
    })

    it('should render only one form', () => {
        const wrapper = component.children();
        expect(wrapper.length).toBe(1)
    })

    it('should render registration form when isNewUser state is true', () => {
        component.setState({isNewUser: true})
        let wrapper = component.find(RegisterForm)
        expect(wrapper.length).toBe(1)
        wrapper = component.find(LoginForm)
        // expect(wrapper.length).toBe(0)
        expect(wrapper).toHaveLength(0)
    })
})