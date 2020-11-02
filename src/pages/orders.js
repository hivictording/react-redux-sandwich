import React, { Component } from 'react'
import withAuth from '../hoc/withAuth'

class Orders extends Component {
    render() {
        return (
            <div>
                Hello Orders Page
            </div>
        )
    }
}

export default withAuth(Orders)
