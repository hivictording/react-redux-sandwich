import React from 'react'

const input = ({name,fieldType,fieldConfig:{type,placeholder},value,error,changed}) => {

    switch (fieldType) {
        case ('input'): {
            return <div className="form-group" key={name}>
                        <label htmlFor={name} className="text-capitalize">{name}</label>
                        <input type={type} 
                            className="form-control"
                            placeholder={placeholder}
                            name={name}
                            id={name}
                            value={value}
                            onChange={changed}>
                        </input>
                        {error.status && <span>{error.message}</span>}
                    </div>
        }

        default:
            return <div>Default Input</div>
    }

    
}

export default input
