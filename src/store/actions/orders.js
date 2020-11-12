import * as Actions from './actions'
import axios from '../../utils/axios/axiosLocal'

const setFetchOrdersLoading = () => {
    return {type: Actions.SET_FETCHORDERS_LOADING}
}

const clearFetchOrdersLoading = ()=> {
    return {type: Actions.CLEAR_FETACHORDERS_LOADING}
}

const setOrders = (orders) => {
    return {type: Actions.SET_ORDERS, payload: orders}
}

const fetchOrders = (user) => {
    return async (dispatch) => {
        dispatch(setFetchOrdersLoading());

        try {
            const response = await axios.get('/orders');
            if (response) {
                const orders = response.data.filter(order => order.user === user);
                if (orders.length >=1) {
                    dispatch(setOrders(orders));
                }
            }
        } catch (error) {
            console.log(error);
        }

        dispatch(clearFetchOrdersLoading());
    }
}

export {fetchOrders}