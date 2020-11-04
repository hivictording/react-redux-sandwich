import * as ActionTypes from '../actions/actions';

const initState = {
    loading: false,
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
        case (ActionTypes.SET_USER_LOADING): {
            return {...state,loading:true}
        }
        case (ActionTypes.CLEAR_USER_LOADING): {
            return {...state,loading:false}
        }
        default:
            return state;
    }
}

export default userReducer