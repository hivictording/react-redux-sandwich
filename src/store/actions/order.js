import {v4 as uuid} from 'uuid'
import * as Actions from './actions'
import axios from '../../utils/axios/axiosLocal'

const setOrderLoading = () => {
    return {type: Actions.SET_ORDER_LOADING}
}

const clearOrderLoading = () => {
    return {type: Actions.CLEAR_ORDER_LOADING}
}

const setOrderStatus = (status) => {
    return {type: Actions.SET_ORDER_STATUS, payload: status}
}
const clearOrderStatus = () => {
    return {type: Actions.CLEAR_ORDER_STATUS}
}


const saveOrder = (user,order) => {
    return async (dispatch) => {
        let status;
        dispatch(setOrderLoading());
        try {
            const response = await axios.post('/orders',{id:uuid(), user,order})
            if (response) {
                dispatch(setOrderStatus('succeed'));
                status = 'succeed'
            } else {
                dispatch(setOrderStatus('failure'));
                status = 'failure'
            }
            
        } catch (error) {
            dispatch(setOrderStatus('failure'));
        }

        dispatch(clearOrderLoading());
        return status;
    }
}

export {saveOrder,clearOrderStatus}