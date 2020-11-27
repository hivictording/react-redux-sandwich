import React, { Component } from 'react'
import {connect} from 'react-redux'

import withAxios from '../hoc/withAxios'
import axios from '../utils/axios/axiosLocal'
import {setInitTotalPrice,fetchIngredientsFromDB,fetchBasePriceFromDB,clearIngredients} from '../store/actions/ingredients'

import {addCartItem} from '../store/actions/cart'

import Card from '../components/card'
import BuilderControl from '../components/builder/builderControl'
import Button from '../UI/Button'
import Spinner from '../UI/Spinner'

import classes from './builder.module.css'

class Builder extends Component {

    addToCartHandler = (sandwich,totalPrice) => {
        const currentUser = Object.entries(this.props.currentUser).length >=1 ? this.props.currentUser.username : "guest"
        this.props.addCartItem({
            user: currentUser,
            sandwich,
            totalPrice
        });
        this.props.clearIngredients(this.props.ingredientsDB.basePrice);
        this.props.history.push('/cart');
    }

    componentDidMount() {
        this.props.fetchIngredientsFromDB();
        this.props.fetchBasePriceFromDB();
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.ingredientsDB.basePrice !== this.props.ingredientsDB.basePrice) {
            this.props.setInitTotalPrice(this.props.ingredientsDB.basePrice)
        }
    }
    
    render() {
        let ingredientList, builderControls;

        // ingredient List
        const ingredientArray = this.props.ingredients.ingredients;
        if (ingredientArray.length < 1) {
            // ingredientList = (<h6>Empty</h6>)
            ingredientList = () => (<h6>Empty</h6>)
        } else {
            ingredientList = () => {
                return <div className={classes.ingredientList}>
                     {ingredientArray.map((ingredient) => {
                         return <div key={ingredient.name}>
                                     {ingredient.name} {ingredient.count}: ${ingredient.totalPrice}
                                 </div>
                     })}
             </div>
            }

            // ingredientList = (
            // <div className={classes.ingredientList}>
            //         {ingredientArray.map((ingredient) => {
            //             return <div key={ingredient.name}>
            //                         {ingredient.name} {ingredient.count}: ${ingredient.totalPrice}
            //                     </div>
            //         })}
            // </div>
            // )
        }

        // buildControls
        const ingredientDBArray = Object.entries(this.props.ingredientsDB.ingredients);
        if (!this.props.ingredientsDB) {
            builderControls = (<h3>No Ingredients Found</h3>)
        } else {
            const myIngredients = ingredientDBArray.map(ingredient => {
            const {price,stockNumber} = ingredient[1];
            return {
                name: ingredient[0],
                price,
                stockNumber
            }
            });

            builderControls = (myIngredients.map(({name,price}) => {
                        return <BuilderControl key={name} ingredient={name} price={price} enabled={ingredientArray.find(ing => ing.name === name)}/>
                    }))
        }

        // rendered content
        let rendered = (
            <div className={`${classes.builder} ${classes.spinner}`}>
                <Spinner/>
            </div>
            
        );
        if (!this.props.ingredientsDB.loading) {
            rendered = (
                <div className={classes.builder}>
                <Card>
                    <div className={classes.cardTitle}>Mario's Sandwich</div>
                    {(ingredientArray.length >= 1) && (<div className={classes.basePrice}>
                        Base Price: ${this.props.ingredientsDB.basePrice}
                    </div>)}
                    <div className={classes.cardCenter}>
                        {/* {ingredientList} */}
                        <ingredientList/>
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

                <div className={classes.buttons}>
                        <Button clicked={() => this.props.clearIngredients(this.props.ingredientsDB.basePrice)} disabled={ingredientArray.length < 1}>reset</Button>
                        <Button clicked={() => this.addToCartHandler(this.props.ingredients.ingredients,this.props.ingredients.totalPrice)} disabled={ingredientArray.length < 1}>add to cart</Button>
                        <Button disabled={ingredientArray.length < 1}>order now</Button>
                </div>
            </div>
            )
        }

        return rendered;
    }
}

const mapStatetoProps = (state) => {
    return {ingredientsDB: state.ingredientsDB,
            ingredients: state.ingredients,
            currentUser: state.user.user}
}

export default (withAxios(connect(mapStatetoProps,{
    setInitTotalPrice,
    fetchIngredientsFromDB,
    fetchBasePriceFromDB,
    clearIngredients,
    addCartItem
})(Builder),axios));
