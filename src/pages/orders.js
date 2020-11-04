import React, { Component } from 'react'
import withAuth from '../hoc/withAuth'

import Spinner from '../UI/Spinner'

class Orders extends Component {
    render() {
        return (
            <div>
                <Spinner/>
            </div>
        )
    }
}

export default withAuth(Orders)
