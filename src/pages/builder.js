import React, { Component } from 'react'
import {connect} from 'react-redux'

import {setInitTotalPrice} from '../store/actions/ingredients'

import Card from '../components/card'
import BuilderControl from '../components/builder/builderControl'

import classes from './builder.module.css'

class Builder extends Component {

    findIngredientNumber = (ingredients,ingredient) => {
        return ingredients[ingredient] ? true : false;
    }

    componentDidMount() {
        this.props.setInitTotalPrice(this.props.ingredientsDB.basePrice)
    }
    
    render() {
        let ingredientList, builderControls;

        // ingredient List
        if (Object.entries(this.props.ingredients.ingredients).length < 1) {
            ingredientList = (<h6>Empty</h6>)
        } else {
            const myIngredients = Object.entries(this.props.ingredients.ingredients);

            ingredientList = (myIngredients.map((ingredient,index) => {
            return <div key={ingredient[0]}>{index !== 0 ? ", ":""}{ingredient[1]} {ingredient[0]}</div>
                    }))
        }

        // buildControls
        if (!this.props.ingredientsDB) {
            builderControls = (<h3>No Ingredients Found</h3>)
        } else {
            const myIngredients = Object.entries(this.props.ingredientsDB.ingredients).map(ingredient => {
            const {price,inStock,stockNumber} = ingredient[1];
            return {
                name: ingredient[0],
                price,
                inStock,
                stockNumber
            }
            });

            builderControls = (myIngredients.map(({name,price}) => {
                        return <BuilderControl key={name} ingredient={name} price={price} enabled={this.findIngredientNumber(this.props.ingredients.ingredients,name)}/>
                    }))
        }

        return (
            <div className={classes.builder}>
                <Card>
                    <div className={classes.cardTitle}>Your Ingredients</div>
                    {(Object.entries(this.props.ingredients.ingredients).length >= 1) && (<div className={classes.totalPrice}>
                        Total Price: {this.props.ingredients.totalPrice}
                    </div>)}
                    <div className={classes.ingredientList}>
                        {ingredientList}
                    </div>
                    
                    
                </Card>
                <Card size="large">
                    <div className={classes.cardTitle}>Select Ingredients</div>
                    {builderControls}
                </Card>
            </div>
            
        )
    }
}

const mapStatetoProps = (state) => {
    return {ingredientsDB: state.ingredientsDB,
            ingredients: state.ingredients}
}

export default connect(mapStatetoProps,{
    setInitTotalPrice
})(Builder);
