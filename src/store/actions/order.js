import * as Actions from './actions'
import axios from '../../utils/axios/axiosLocal'

const setOrderLoading = () => {
    return {type: Actions.SET_ORDER_LOADING}
}

const clearOrderLoading = () => {
    return {type: Actions.CLEAR_ORDER_LOADING}
}

// const setOrder = (user,order) => {

// }


const saveOrder = (user,order) => {
    return (dispatch) => {
        dispatch(setOrderLoading());
        try {
            axios.post('/orders',{user,order})
        } catch (error) {
            console.log(error);
        }

        dispatch(clearOrderLoading());
    }
}

export {saveOrder}