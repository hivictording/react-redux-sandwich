import * as Actions from '../actions/actions'

const initState = {
    loading: false,
    status: ''
};

export default (state=initState,action) => {
    switch (action.type) {
        case (Actions.SET_ORDER_LOADING): {
            return {...state, loading: true}
        }
        case (Actions.CLEAR_ORDER_LOADING): {
            return {...state, loading: false}
        }
        case (Actions.SET_ORDER_STATUS): {
            return {...state, status: action.payload}
        }
        case (Actions.CLEAR_ORDER_STATUS): {
            return {...state, status: ''}
        }
        default:
            return state;
    }
} 