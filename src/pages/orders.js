import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import withAuth from '../hoc/withAuth'

import Spinner from '../UI/Spinner'

class Orders extends Component {
    render() {
        // if (Object.entries(this.props.currentUser).length < 1) {
        //     return <Redirect to="/login"/>
        // }

        return (
            <div>
                <Spinner/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.user
    }
}

export default withAuth(connect(mapStateToProps)(Orders))
