import * as Actions from '../actions/actions'

const initState = {
    loading:false,
    ingredients: {},
    basePrice: 0,
    error:null
}

const ingredientsDBReducer = (state=initState,action) => {
    switch (action.type) {
       case (Actions.SET_INIT_INGREDIENTS): {
            return {...state,ingredients:action.payload}
        }
       case (Actions.SET_INIT_BASEPRICE): {
            return {...state,basePrice:action.payload}
        }
        default:
            return state; 
    }
}

export default ingredientsDBReducer;