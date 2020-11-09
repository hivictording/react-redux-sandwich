import * as Actions from '../actions/actions'
const initState = [];

const orderReducer = (state=initState,action) => {
    switch (action.type) {
        case (Actions.ADD_ORDER): {
            const currentUser = action.payload.user;
            const currentOrder = state.find(o => o.user === currentUser);
            if (currentOrder) {
                const otherOrders = state.filter(o => o.user !== order.user)
                return [...otherOrders,{user:currentUser,orderList:[...currentOrder.orderList,action.payload.order]}]
            } else {
                return [...state,{user:currentUser,orderList:[...currentOrder.orderList,action.payload.order]}]
            }
        }
        default:
            return state;
    }
} 