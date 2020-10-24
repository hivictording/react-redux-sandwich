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
        cabbage: {
            inStock: true,
            price: 1.2,
            stockNumber: 13,
        },
        mushroom: {
            inStock: true,
            price: 1.4,
            stockNumber: 13,
        },
        turkey: {
            price:6.1
        },
        chicken: {
            price:7.9
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
        "red pepper": {
            inStock: true,
            price: 1.8,
            stockNumber: 50,
        },
        "potato": {
            inStock: true,
            price: 3.2,
            stockNumber: 50,
        },
        "brocolli": {
            inStock: true,
            price: 2.7,
            stockNumber: 50,
        },
        "cheese": {
            inStock: true,
            price: 1.3,
            stockNumber: 50,
        },
        "pickle": {
            inStock: true,
            price: 1.3,
            stockNumber: 50,
        },
    },
    basePrice: 3.99
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