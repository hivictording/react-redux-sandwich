import React,{Component} from 'react'
import {connect} from 'react-redux'

const withAuth = (WrappedComponent) => {
    class hocComponent extends Component {
        render() {
            let wrappedComponent = (
                <div>you have to login first to access the page</div>
            )

            if (this.props.isAuthenticated) {
                wrappedComponent = (
                    <WrappedComponent/>
                )
            }
            return wrappedComponent;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: Object.entries(state.user.user).length >= 1
        }
    }

    return connect(mapStateToProps)(hocComponent);
}

export default withAuth;