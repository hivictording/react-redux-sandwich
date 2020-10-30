import React,{Component} from 'react';

import {connect} from 'react-redux'
import {FaTimes} from 'react-icons/fa'

import Button from '../UI/Button'
import BackDrop from '../components/backDrop'
import Modal from '../UI/Modal'
import {removeCartItem,clearCart} from '../store/actions/cart'

import classes from './cart.module.css'
import sandwichImg from '../static/images/sandwich.jpg'

class Cart extends Component {
    
    state = {
        confirmClearCart: false
    }

    toggleModal = () => {
        this.setState((prevState) => {
                            return {confirmClearCart: !prevState.confirmClearCart}
                        })
    }
    openModal = () => {
        this.setState({
            ...this.state,
            confirmClearCart: true
        })
    }

    render() {
        let myCart = this.props.cart.find(item => item.user === 'mario');
        let cartTotalPrice;

        if (myCart) {
            cartTotalPrice = myCart.totalPrice;
            if (cartTotalPrice === 0) {
                cartTotalPrice = false;
            }
            myCart = myCart.sandwichList;
        }

        let mySandwiches;

        if (myCart) {
            mySandwiches = (
                myCart.map((sandwich) => {
                    return <div className="col-md-6 col-lg-4 col-xl-3 mx-auto my-2" key={sandwich.id}>
                                <div className={`card ${classes.card}`}>
                                    <img src={sandwichImg} alt="Sandwich Image" className="img-card-top"/>
                                    <div className="card-body text-center">
                                        <h6 className="card-title text-capitalize">sandwich price: {sandwich.totalPrice}</h6>
                                    </div>
                                    <ul className="list-group list-group-flush text-center text-capitalize">
                                        {sandwich.sandwich.map(s => {
                                            return <li className="list-group-item" key={s.name}>{s.name}*{s.count}</li>
                                        })}
                                        
                                    </ul>
                                    <button className={classes.iconWrapper} onClick={() => this.props.removeCartItem(sandwich.id)}>
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
                        {cartTotalPrice && 
                        <div className={`text-center text-capitalize ${classes.cartTotalPrice}`}>
                            total price: {cartTotalPrice}
                        </div>}
                    </div>
                    {myCart && <div className="col-10 col-md-7 col-lg-6 mx-auto d-flex justify-content-around mt-2 mb-5">
                        <Button clicked={this.openModal}>
                            clear cart
                        </Button>
                        <Button>
                            proceed to order
                        </Button>
                    </div>}
                    <div className="col-md-12 mx-auto">
                        <div className="row">
                            {mySandwiches}
                            
                        </div>
                    </div>
                </div>
            </div>
            {
                this.state.confirmClearCart && (
                    <div>
                        <BackDrop clicked={this.toggleModal}/>
                        
                        <Modal title="clean your cart?" 
                                confirmText="Yes" 
                                cancelText="Cancel" 
                                confirm={() => {
                                    this.props.clearCart();
                                    this.toggleModal();
                                }} 
                                cancel={this.toggleModal}/>
                    </div>
                )
            }
        </div>
    }
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps,{
    removeCartItem,
    clearCart
})(Cart);