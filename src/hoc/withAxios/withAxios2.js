import React from 'react'
import {useEffect} from 'react'
// import axios from '../../utils/axios/axiosLocal'

const withAxios = (WrappedComponent,axios) => {
    
    return (props) => {
        const [errorMsg,setErrorMsg] = React.useState('');

        // implementing componentwillmount in functional component, good practice
        const [mount,setMount] = React.useState(false);

        if (!mount) {
            axios.interceptors.request.use(request => {
                setErrorMsg('');
                return request
            },
            null);

            axios.interceptors.response.use(response => {
                return Promise.resolve(response)
            },
            error => {console.log("error happend......");setErrorMsg('Something Went Wrong.....')})
        }

        console.log(mount,errorMsg)

        useEffect(() => {
            setMount(true)
        },[])

        return (
            <WrappedComponent {...props} error={errorMsg}/>
        )
    }
}

export default withAxios
