import React from 'react';

import classes from './card.module.css';


class Card extends React.Component {
    
    render () {
        const classList = [classes.card];
        if (this.props.size === 'large') {
            classList.push(classes.large)
        } else {
            classList.push(classes.small)
        }

        return <div className={classList.join(' ')}>
        {this.props.children}
    </div>
    }
    
}

export default Card;