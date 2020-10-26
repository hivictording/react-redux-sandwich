import * as Actions from '../actions/actions'

const initState = {
    user: 'vding',
    cart: []
}

const cartReducer = (state=initState,action) => {
    switch (action.type) {
        case (Actions.ADD_INGREDIENT): {
            return {...state,cart: [...state.cart,action.payload]}
        }
        case (Actions.REMOVE_CART_ITEM): {
            const filteredCart = state.cart.filter(item => item.id !== action.payload)
            return {...state,cart: [...filteredCart]}
        }
        case (Actions.CLEAR_CART): {
            return {...state,cart: []}
        }
        default:
            return state;
    }
}