import React from 'react'

function error({children}) {
    return (
        <div className="text-capitalize text-danger">
            {children}
        </div>
    )
}

export default error
