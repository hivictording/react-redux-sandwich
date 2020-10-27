import React,{Component} from 'react';

import {connect} from 'react-redux'
import {FaTimes} from 'react-icons/fa'

import classes from './cart.module.css'
import sandwichImg from '../static/images/sandwich.jpg'

class Cart extends Component {
    
    render() {
        let myCart = this.props.cart.find(item => item.user === 'mario');
        if (myCart) {
            myCart = myCart.sandwichList;
        }

        let mySandwiches;

        if (myCart) {
            mySandwiches = (
                myCart.map((sandwich,index) => {
                    return <div className="col-md-6 col-lg-4 col-xl-3 mx-auto my-2" key={index}>
                                <div className={`card ${classes.card}`}>
                                    <img src={sandwichImg} alt="Sandwich Image" className="img-card-top"/>
                                    <div className="card-body">
                                        <h6 className="card-title text-uppercase">total price: {sandwich.totalPrice}</h6>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {sandwich.sandwich.map(s => {
                                            return <li className="list-group-item" key={s.name}>{s.name}*{s.count}</li>
                                        })}
                                        
                                    </ul>
                                    <button className={classes.iconWrapper}>
                                        <FaTimes/>
                                    </button>
                                </div>
                            </div>
                })
                
            )
        } else {
            mySandwiches = (
                <div className={`col-md-10 mx-auto text-center ${classes.emptyCart}`}>No Sandwiches Found In Your Cart</div>
            );
        }
        return <div className={`py-3`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className={`text-center text-capitalize ${classes.cartTitle}`}>
                            your cart
                        </div>
                    </div>
                    <div className="col-md-12 mx-auto">
                        <div className="row">
                            {mySandwiches}
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    }
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps)(Cart);