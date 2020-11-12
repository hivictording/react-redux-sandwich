import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import withAuth from '../hoc/withAuth'
import {fetchOrders} from '../store/actions/orders'

import Spinner from '../UI/Spinner'

class Orders extends Component {

    componentDidMount() {
        // console.log(this.props.currentUser);
        this.props.fetchOrders(this.props.currentUser.username)
    }

    render() {
        if (this.props.orders.loading) {
            return <div>
                <Spinner/>
            </div>
        }

        let orders = (
            <div>
                <h3 className="text-capitalize">no orders found</h3>
            </div>
        )

        if (this.props.orders.orders.length >= 1) {
            orders = (
                <div>
                    {this.props.orders.orders.map(order => {
                        return <div key={order.id}>{order.id}</div>
                    })}
                </div>
            )
        }

        return orders;
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.user,
        orders: state.orders
    }
}

export default withAuth(connect(mapStateToProps,{fetchOrders})(Orders))
