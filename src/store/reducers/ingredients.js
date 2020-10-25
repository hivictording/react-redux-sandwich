import * as Actions from '../actions/actions';

const initState = {
    ingredients: [],
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
            let newIngredient;
            const ingredient = state.ingredients.find(i => i.name === ingredientName);
            if (ingredient) {
                newIngredient = {...ingredient,count:ingredient.count + 1,totalPrice: +(ingredient.unitPrice + ingredient.totalPrice).toFixed(2)};
                const filteredIngredients = state.ingredients.filter(i => i.name !== ingredientName);
                return {...state,ingredients:[...filteredIngredients,newIngredient], totalPrice: +(state.totalPrice + ingredient.unitPrice).toFixed(2)}
            } else {
                newIngredient = {name:ingredientName,count: 1,unitPrice:ingredientPrice,totalPrice:ingredientPrice};
                const newTotalPrice = +(state.totalPrice + ingredientPrice).toFixed(2);
                return {...state,ingredients:[...state.ingredients,newIngredient],totalPrice: newTotalPrice}
            }
        }
        
        case (Actions.REMOVE_INGREDIENT): {
            const ingredientName = action.payload.ingredient;
            let newIngredient;
            const ingredient = state.ingredients.find(i => i.name === ingredientName);
            if (ingredient) {
                const newCount = ingredient.count - 1;
                const filteredIngredients = state.ingredients.filter(i => i.name !== ingredientName);
                if (newCount >=1 ) {
                    newIngredient = {...ingredient,count:newCount,totalPrice: +(ingredient.totalPrice - ingredient.unitPrice).toFixed(2)};
                    
                    return {...state,ingredients:[...filteredIngredients,newIngredient], totalPrice: +(state.totalPrice - ingredient.unitPrice).toFixed(2)}
                } else {
                    return {...state,ingredients:[...filteredIngredients], totalPrice: +(state.totalPrice - ingredient.unitPrice).toFixed(2)}
                }
            }
                
            return state;
        }
        default:
            return state; 
    }
}

export default ingredientReducer;