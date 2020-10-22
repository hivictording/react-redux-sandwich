import React, { Component } from 'react'
import {connect} from 'react-redux'

import {setInitTotalPrice} from '../store/actions/ingredients'

import Card from '../components/card'
import BuilderControl from '../components/builder/builderControl'

import classes from './builder.module.css'

class Builder extends Component {

    componentDidMount() {
        this.props.setInitTotalPrice(this.props.ingredientsDB.basePrice)
    }
    
    render() {
        let builderControls;

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
                        return <BuilderControl key={name} ingredient={name} price={price}/>
                    }))
        }

        return (
            <div className={classes.builder}>
                <h5 className={classes.builderTitle}>Select Your Ingredient</h5>
                <Card>
                    Hello Small Card
                </Card>
                <Card size="large">
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
