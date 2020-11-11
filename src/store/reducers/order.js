import * as Actions from '../actions/actions'

const initState = {
    loading: false,
    user: '',
    orders: [],
};

export default (state=initState,action) => {
    switch (action.type) {
        case (Actions.SET_ORDER_LOADING): {
            return {...state, loading: true}
        }
        case (Actions.CLEAR_ORDER_LOADING): {
            return {...state, loading: false}
        }
        default:
            return state;
    }
} 