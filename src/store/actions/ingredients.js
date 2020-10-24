import * as Actions from './actions';

import axiosLocal from '../../utils/axios/axiosLocal'

const fetchIngredientsFromDB = () => {
    return async (dispatch) => {
        try {
            let response = await axiosLocal.get('/ingredients');
            dispatch(setInitIngredients(response.data));
        } catch (error) {
            console.log(error);
        }
    }
};

const setInitIngredients = (ingredientsFromDB) => {
    return {type:Actions.SET_INIT_INGREDIENTS,payload:ingredientsFromDB}
}
const fetchBasePriceFromDB = () => {
    return async (dispatch) => {
        try {
            let response = await axiosLocal.get('/price');
            dispatch(setInitBasePrice(response.data.basePrice));
        } catch (error) {
            console.log(error);
        }
    }
};

const setInitBasePrice = (basePriceDB) => {
    return {type:Actions.SET_INIT_BASEPRICE,payload:basePriceDB}
}

const setInitTotalPrice = (price) => {
    return {type: Actions.SET_INIT_TOTALPRICE, payload: price}
};

const addIngredient = (ingredient,price) => {
   return {type: Actions.ADD_INGREDIENT, payload:{ingredient:ingredient,price:price}} };

const removeIngredient = (ingredient,price) => {
   return {type: Actions.REMOVE_INGREDIENT, payload:{ingredient:ingredient,price:price}} };

export {fetchIngredientsFromDB, fetchBasePriceFromDB,setInitTotalPrice ,addIngredient,removeIngredient}