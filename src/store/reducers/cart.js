import {v4 as uuid} from 'uuid';
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
                const updatedResult = {...result,sandwichList:[...result.sandwichList,{id:uuid(),sandwich,totalPrice}],totalPrice: +(result.totalPrice + totalPrice).toFixed(2)}
                const filteredState = state.filter(item => item.user !== user);
                return [...filteredState,updatedResult]
            } else {
                // return [...state,{user:user,sandwichList:new Array({sandwich,totalPrice})}];
                return [...state,{user:user,sandwichList:Array.of({id:uuid(),sandwich,totalPrice}),totalPrice:totalPrice}];
            }
        }
        case (Actions.REMOVE_CART_ITEM): {
            const myCart = state.find(item => item.user === 'mario');
            const remainingCart = state.filter(item => item.user !== 'mario')
            const updatedSandwichList = myCart.sandwichList.filter(sandwich => sandwich.id !== action.payload);
            const sandwichPrice = myCart.sandwichList.find(sandwich => sandwich.id === action.payload).totalPrice;
            let updatedPrice;
            // if (updatedSandwichList.length >= 0) {
                updatedPrice = +(myCart.totalPrice - sandwichPrice).toFixed(2);
            // } else {
                // updatedPrice = 0;
            // }

            const myNewCart = {...myCart,sandwichList:updatedSandwichList,totalPrice: updatedPrice};
        
            return [...remainingCart,myNewCart]
        }
        case (Actions.CLEAR_CART): {
            return []
        }
        default:
            return state;
    }
}