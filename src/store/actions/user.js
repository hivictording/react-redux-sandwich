import {SET_CURRENT_USER, SET_CURRENT_USER_ERROR,SET_CURRENT_USER_TO_EMPTY} from './actions';

import {v4 as uuid} from 'uuid';
import axios from '../../utils/axios/axiosLocal';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
const setCurrentUserError = () => {
    return {
        type: SET_CURRENT_USER_ERROR
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
            if (response.data.length >= 1) {
                dispatch(setCurrentUser(response.data[0]));
            } else {
                dispatch(setCurrentUserError())
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

const userLogout = () => {
    return {
        type: SET_CURRENT_USER_TO_EMPTY
    }
}

export {setCurrentUser,userRegistration,userLogin,userLogout}