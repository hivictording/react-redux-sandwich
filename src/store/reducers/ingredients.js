import * as Actions from '../actions/actions';

const initState = {
    ingredients: {},
    totalPrice: 0
}

const ingredientReducer = (state=initState, action) => {
    switch (action.type) {
        case (Actions.SET_INIT_TOTALPRICE): {
            return {...state,totalPrice:action.payload}
        }
        case (Actions.ADD_INGREDIENT): {
            const ingredientName = action.payload.ingredient;
            const ingredientPrice = action.payload.price;
            let ingredientCount;
            if (state.ingredients[ingredientName]) {
                ingredientCount = state.ingredients[ingredientName] + 1;
            } else {
                ingredientCount = 1;
            }
            let updatedIngredients = {...state.ingredients,[ingredientName]: ingredientCount};
            return {...state, ingredients:updatedIngredients, totalPrice: state.totalPrice + ingredientPrice}
        }
        default:
            return state; 
    }
}

export default ingredientReducer;