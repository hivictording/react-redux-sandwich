import React from 'react'
import {connect} from 'react-redux';

import classes from './builderControl.module.css';
import {FaPlusSquare} from 'react-icons/fa'
import {FaMinusSquare} from 'react-icons/fa'

import {addIngredient} from '../../../store/actions/ingredients';


const BuilderControl = ({ingredient,addIngredient}) => {
    return (
        <article className={classes.builderControl}>
          <button className={classes.iconWrapper} onClick={() => addIngredient(ingredient)}>
              <FaPlusSquare/>
          </button>
    <div className="builderControlText">{ingredient}</div>  
          <button className={classes.iconWrapper}>
              <FaMinusSquare/>
          </button>  
        </article>
    )
}

export default connect(null,{addIngredient})(BuilderControl);
