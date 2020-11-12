import * as Actions from '../actions/actions';

const initState = {
    loading: false,
    orders:[]
}

export default (state=initState,action) => {
    switch (action.type) {
        case (Actions.SET_FETCHORDERS_LOADING): {
            return {...state,loading: true}
        }
        case (Actions.CLEAR_FETACHORDERS_LOADING): {
            return {...state,loading: false}
        }
        case (Actions.SET_ORDERS): {
            return {...state,orders:action.payload}
        }
        
        default: 
            return state;
    }
}