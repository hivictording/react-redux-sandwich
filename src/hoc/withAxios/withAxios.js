import React,{Component} from 'react';

import BackDrop from '../../components/backDrop';
import Modal from '../../UI/Modal'

const withAxios = (WrappedComponent,axios) => {
    
    return class extends Component {
        state = {
            errorMsg: null
        }

        clearError = () => {
            this.setState({
                errorMsg: null
            })
        }

        componentWillMount() {
            axios.interceptors.request.use((request) => {
                this.setState({errorMsg:null})
                return request;
            });
            axios.interceptors.response.use(response => {
                // console.log(response);
                if (!response) {
                    this.setState({
                    errorMsg: `Error fetching data`
                });
                }
                return response;
            },
                error => {
                this.setState({
                    errorMsg: `Error with ${error.config.baseURL}`
                });
            })
        }
        
        render() {
            return (
                <React.Fragment>
                    {this.state.errorMsg && (<BackDrop clicked={this.clearError}/>)}
                    {this.state.errorMsg && (<Modal title={this.state.errorMsg} 
                                cancelText="Close" 
                                cancel={this.clearError}/>)}
                    
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
        
    }
}

export default withAxios
