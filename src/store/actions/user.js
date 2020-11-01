import {REGISTER_USER,SET_CURRENT_USER,SAVE_USER} from './actions';

import {v4 as uuid} from 'uuid';
import axios from '../../utils/axios/axiosLocal';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

const saveUser = (user) => {
    return async (dispatch) => {
        console.log(user);
        try {
            const updatedUser = {...user,id:uuid()};
            const response = await axios.post('/users',updatedUser);
            dispatch(setCurrentUser(user));
        } catch (error) {
            console.log('Register user failed');
        }
    }
}

export {setCurrentUser,saveUser}