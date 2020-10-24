import React, { Component } from 'react'
import {connect} from 'react-redux'

import {setInitTotalPrice} from '../store/actions/ingredients'

import Card from '../components/card'
import BuilderControl from '../components/builder/builderControl'

import classes from './builder.module.css'

class Builder extends Component {

    findIngredientNumber = (ingredients,ingredient) => {
        return ingredients[ingredient];
    }

    findIngredientPrice = (ingredients,ingredient) => {
        return ingredients[ingredient].price;
    }

    componentDidMount() {
        this.props.setInitTotalPrice(this.props.ingredientsDB.basePrice)
    }
    
    render() {
        let ingredientList, builderControls;

        // ingredient List
        const ingredientArray = Object.entries(this.props.ingredients.ingredients);
        if (Object.entries(this.props.ingredients.ingredients).length < 1) {
            ingredientList = (<h6>Empty</h6>)
        } else {
            const myIngredients = Object.entries(this.props.ingredients.ingredients);

            ingredientList = (<div className={classes.ingredientList}>
                {myIngredients.map((ingredient,index) => {
            return <div key={ingredient[0]}>
                {ingredient[0]} {ingredient[1]}: ${(this.findIngredientPrice(this.props.ingredientsDB.ingredients,ingredient[0]) * this.findIngredientNumber(this.props.ingredients.ingredients,ingredient[0])).toFixed(2)}
            </div>
                    })}
            </div>)
        }

        // buildControls
        const ingredientDBArray = Object.entries(this.props.ingredientsDB.ingredients);
        if (!this.props.ingredientsDB) {
            builderControls = (<h3>No Ingredients Found</h3>)
        } else {
            const myIngredients = ingredientDBArray.map(ingredient => {
            const {price,inStock,stockNumber} = ingredient[1];
            return {
                name: ingredient[0],
                price,
                inStock,
                stockNumber
            }
            });

            builderControls = (myIngredients.map(({name,price}) => {
                        return <BuilderControl key={name} ingredient={name} price={price} enabled={this.findIngredientNumber(this.props.ingredients.ingredients,name) >= 1}/>
                    }))
        }

        return (
            <div className={classes.builder}>
                <Card>
                    <div className={classes.cardTitle}>Your Ingredients</div>
                    {(ingredientArray.length >= 1) && (<div className={classes.basePrice}>
                        Base Price: ${this.props.ingredientsDB.basePrice}
                    </div>)}
                    <div className={classes.cardCenter}>
                        {ingredientList}
                    </div>
                    
                    {(ingredientArray.length >= 1) && (<div className={classes.totalPrice}>
                        Total Price: ${this.props.ingredients.totalPrice}
                    </div>)}
                    
                    
                </Card>
                <Card size="large">
                    <div className={classes.cardTitle}>Select Ingredients</div>
                    <div className={classes.builderControls}>
                        {builderControls}
                    </div>
                    
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
