import * as Actions from './actions';

const fetchIngredientsFromBackend = () => {
    return {type: Actions.FETCH_INGREDIENTS_FROM_BACKEND}
};

const addIngredient = (ingredient) => {
   return {type: Actions.ADD_INGREDIENT, payload:ingredient} };

export {fetchIngredientsFromBackend,addIngredient}