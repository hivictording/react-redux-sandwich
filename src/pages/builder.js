import React, { Component } from 'react'
import {connect} from 'react-redux'

import Card from '../components/card'
import BuilderControl from '../components/builder/builderControl'

import classes from './builder.module.css'

class Builder extends Component {
    
    render() {
        let builderControls;
        if (!this.props.ingredients) {
            builderControls = (<h3>No Ingredients Found</h3>)
        } else {
            builderControls = (Object.keys(this.props.ingredients).map((ingredient) => {
                        return <BuilderControl key={ingredient} ingredient={ingredient}/>
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
    return {ingredients: state.ingredients}
}

export default connect(mapStatetoProps)(Builder);
