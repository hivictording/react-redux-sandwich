import React from 'react';

import classes from './card.module.css';

const Card = ({children,size}) => {
    let classList = [classes.card];
    if (size === 'large') {
        classList.push(classes.large)
    } else {
        classList.push(classes.small)
    }
    return <div className={classList.join(' ')}>
        {children}
    </div>
}

export default Card;