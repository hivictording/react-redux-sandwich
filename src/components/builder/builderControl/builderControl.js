import React from 'react'
import {connect} from 'react-redux';

import classes from './builderControl.module.css';
import {FaPlusSquare} from 'react-icons/fa'
import {FaMinusSquare} from 'react-icons/fa'

import {addIngredient,removeIngredient} from '../../../store/actions/ingredients';


const BuilderControl = ({ingredient,price,enabled,addIngredient,removeIngredient}) => {
    // const findIngredientNumber = (ingredient) => {
    //     return ingredients[ingredient] ? true : false;
    // }

    return (
        <article className={classes.builderControl}>
          <button className={classes.iconWrapper} onClick={() => addIngredient(ingredient,price)}>
              <FaPlusSquare/>
          </button>
          <div className="builderControlText">{ingredient}</div>  
          <button className={classes.iconWrapper} onClick={() => removeIngredient(ingredient,price)} disabled={!enabled}>
              <FaMinusSquare/>
          </button>  
        </article>
    )
}

// const mapStatetoProps = (state) => {
//     return {
//         ingredients: state.ingredients.ingredients
//     }
// }

export default connect(null,{addIngredient,removeIngredient})(BuilderControl);
