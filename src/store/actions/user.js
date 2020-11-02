import {SET_CURRENT_USER} from './actions';

import {v4 as uuid} from 'uuid';
import axios from '../../utils/axios/axiosLocal';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

const userRegistration = (user) => {
    return async (dispatch) => {
        try {
            const updatedUser = {...user,id:uuid()};
            const response = await axios.post('/users',updatedUser);
            dispatch(setCurrentUser(response.data));
        } catch (error) {
            console.log('Register user failed');
        }
    }
}

const userLogin = (username,password) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/users?username=${username}&password=${password}`)
            dispatch(setCurrentUser(response.data[0]));
        } catch (error) {
            console.log(error)
        }
    }
}

export {setCurrentUser,userRegistration,userLogin}