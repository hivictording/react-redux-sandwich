import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {connect} from 'react-redux'

import NavLink from '../../navLink/navLink'
import classes from './navCart.module.css'

const NavCart = ({cart,currentUser}) => {
    const username = Object.entries(currentUser).length >=1 ? currentUser.username : 'guest'
    const myCart = cart.find(item => item.user === username);
    let sandwichNumber;
    if (myCart) {
        sandwichNumber = myCart.sandwichList.length;
    } else {
        sandwichNumber = 0;
    }

    return (
        <NavLink path='/cart'>
            <div className={classes.cartIcon}>
                <FaCartPlus/>
                <div className={classes.sandwichNumber}>
                    {sandwichNumber >= 1 && sandwichNumber}
                </div>
            </div>
        </NavLink>
    )
}

const mapStatetoProps =(state) => {
    return {
        cart: state.cart,
        currentUser: state.user.user
    }
}

export default connect(mapStatetoProps)(NavCart);
