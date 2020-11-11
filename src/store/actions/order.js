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


const saveOrder = (user,order) => {
    return async (dispatch) => {
        dispatch(setOrderLoading());
        try {
            const response = await axios.post('/orders',{user,order})
            if (response) {
                dispatch(setOrderStatus('succeed'))
            } else {
                dispatch(setOrderStatus('failure'));
            }
            
        } catch (error) {
            dispatch(setOrderStatus('failure'));
        }

        dispatch(clearOrderLoading());
    }
}

export {saveOrder}