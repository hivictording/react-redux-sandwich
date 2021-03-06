import React,{Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

import Button from '../UI/Button'
import BackDrop from '../components/backDrop'
import Modal from '../UI/Modal'
// import OrderForm from '../components/cart/orderForm'
import {removeCartItem,clearCart} from '../store/actions/cart'

import classes from './cart.module.css'
import sandwichImg from '../static/images/sandwich.jpg'
import Spinner from '../UI/Spinner/spinner';

class Cart extends Component {
    
    state = {
        confirmClearCart: false,
        isOrdering: false
    }

    toggleModal = () => {
        this.setState((prevState) => {
                            return {...prevState,confirmClearCart: !prevState.confirmClearCart}
                        })
    }
    openModal = () => {
        this.setState({
            ...this.state,
            confirmClearCart: true
        })
    }

    orderHandler = () => {
        if (Object.entries(this.props.currentUser).length >= 1) {
            console.log('go to order-form');
            this.setState({
                ...this.state,
                isOrdering: true
            })
        } else {
            this.props.history.push("/login");
        }
    }

    render() {
        const currentUser = Object.entries(this.props.currentUser).length >=1 ? this.props.currentUser.username : "guest"
        let myCart = this.props.cart.find(item => item.user === currentUser);
        let cartTotalPrice;

        if (myCart) {
            cartTotalPrice = myCart.totalPrice;
            if (cartTotalPrice === 0) {
                cartTotalPrice = false;
            }
            myCart = myCart.sandwichList;
            if (myCart.length < 1 ) {
                myCart = null
            }
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
                                    <button className={classes.iconWrapper} onClick={() => this.props.removeCartItem(currentUser,sandwich.id)}>
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

        // proceed to order if this.state.isOrdering === true

        if (this.state.isOrdering && currentUser !== 'guest') {
            const OrderForm = React.lazy(() => import('../components/cart/orderForm'))
            return <div className="py-3">
                    <React.Suspense fallback={<Spinner/>}>
                        <OrderForm/>
                    </React.Suspense>
                    
                </div>
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
                        <Button clicked={this.orderHandler}>
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
                        
                        <Modal title="do you want to clear the cart?" 
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
        cart: state.cart,
        currentUser: state.user.user,
    }
}

export default withRouter(connect(mapStatetoProps,{
    removeCartItem,
    clearCart
})(Cart));