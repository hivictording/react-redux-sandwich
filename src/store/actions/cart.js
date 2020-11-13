import * as Actions from './actions'

const addCartItem = (item) => {
    return {type: Actions.ADD_CART_ITEM, payload:item}
}
const removeCartItem = (currentUser,itemID) => {
    return {type: Actions.REMOVE_CART_ITEM, payload:{user:currentUser,id:itemID}}
}
const clearCart = () => {
    return {type: Actions.CLEAR_CART}
}

const setCartOwner = (username) => {
    return {type: Actions.SET_CART_OWNER, payload: username}
}

export {
    addCartItem,removeCartItem,clearCart,setCartOwner
}