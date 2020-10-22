import * as Actions from './actions';

const fetchIngredientsFromDB = () => {
    return {type: Actions.FETCH_INGREDIENTS_FROM_DB}
};

const setInitTotalPrice = (price) => {
    return {type: Actions.SET_INIT_TOTALPRICE, payload: price}
};

const addIngredient = (ingredient,price) => {
   return {type: Actions.ADD_INGREDIENT, payload:{ingredient:ingredient,price:price}} };

export {fetchIngredientsFromDB, setInitTotalPrice ,addIngredient}