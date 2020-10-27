import * as Actions from '../actions/actions'

const initState = [];

export default (state=initState,action) => {
    switch (action.type) {
        case (Actions.ADD_CART_ITEM): {
            const user=action.payload.user;
            const sandwich = action.payload.sandwich;
            const totalPrice = action.payload.totalPrice;
            const result = state.find(item => item.user === user);
            if (result) {
                const updatedResult = {...result,sandwichList:[...result.sandwichList,{sandwich,totalPrice}]}
                const filteredState = state.filter(item => item.user !== user);
                return [...filteredState,updatedResult]
            } else {
                return [...state,{user:user,sandwichList:new Array({sandwich,totalPrice})}];
            }
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