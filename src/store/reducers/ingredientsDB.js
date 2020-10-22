import * as Actions from '../actions/actions'

const initState = {
    ingredients: {
        meat: {
            inStock: true,
            price: 3,
            stockNumber: 18,
        },
        tomato: {
            inStock: true,
            price: 1.2,
            stockNumber: 13,
        },
        lettuce: {
            inStock: true,
            price: 0.5,
            stockNumber: 15,
        },
        cucumber: {
            inStock: true,
            price: 0.8,
            stockNumber: 30,
        },
        "red onion": {
            inStock: true,
            price: 1.5,
            stockNumber: 20,
        },
        "green pepper": {
            inStock: true,
            price: 1.6,
            stockNumber: 50,
        },
    },
    basePrice: 6
}

const ingredientsDBReducer = (state=initState,action) => {
    switch (action.type) {
        case (Actions.FETCH_INGREDIENTS_FROM_DB): {
            return state;
        }
        default:
            return state; 
    }
}

export default ingredientsDBReducer;