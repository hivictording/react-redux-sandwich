import * as ActionTypes from '../actions/actions';

const initState = {
    user: {}
}

const userReducer = (state=initState,action) => {
    switch (action.type) {
        case (ActionTypes.SET_CURRENT_USER): {
            return {...state,user: action.payload}
        }
        default:
            return state;
    }
}

export default userReducer