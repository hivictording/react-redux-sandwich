import React,{Component} from 'react'

const withForm1 = (WrappedComponent,formFields) => {
    return class extends Component {
        state = {formFields}
        render() {
            return (
                <WrappedComponent {...this.props} formFields={this.state.formFields}/>
            )
        }
    }
}

export default withForm1
