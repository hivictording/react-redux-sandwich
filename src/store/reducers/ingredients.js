import * as Actions from '../actions/actions';

const initState = {
    meat:0,
    tomato:0,
    lettuce:0,
    cucumber:0,
    "red onions":0,
    "green pepper":0
}

const ingredientReducer = (state=initState, action) => {
    switch (action.type) {
        case (Actions.FETCH_INGREDIENTS_FROM_BACKEND): {
            return state;
        }
        case (Actions.ADD_INGREDIENT): {
            const ingredientName = action.payload;
            return {...state, [ingredientName]: state[ingredientName] + 1}
        }
        default:
            return state; 
    }
}

export default ingredientReducer;