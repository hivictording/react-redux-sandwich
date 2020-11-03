import * as ActionTypes from '../actions/actions';

const initState = {
    user: {},
    error: false
}

const userReducer = (state=initState,action) => {
    switch (action.type) {
        case (ActionTypes.SET_CURRENT_USER): {
            return {...state,user: action.payload,error:false}
        }
        case (ActionTypes.SET_CURRENT_USER_ERROR): {
            return {...state,user: {},error:true}
        }
        case (ActionTypes.SET_CURRENT_USER_TO_EMPTY): {
            return {...state,user:{},error:false}
        }
        default:
            return state;
    }
}

export default userReducer