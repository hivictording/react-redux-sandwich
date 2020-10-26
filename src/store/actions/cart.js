import * as Actions from './actions'

const addCartItem = (item) => {
    return {type: Actions.ADD_CART_ITEM, payload:item}
}
const removeCartItem = (itemID) => {
    return {type: Actions.REMOVE_CART_ITEM, payload:itemID}
}
const clearCart = () => {
    return {type: Actions.CLEAR_CART}
}

export {
    addCartItem,removeCartItem,clearCart
}