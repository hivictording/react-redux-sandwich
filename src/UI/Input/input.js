import classes from './input.module.css'
import React from 'react'

const input = ({name,fieldType,fieldConfig:{type,placeholder},value,error,changed}) => {
    // console.log(error,name);

    switch (fieldType) {
        case ('input'): {
            return <div className="form-group" key={name}>
                        <label htmlFor={name} className="text-capitalize">{name}</label>
                        {error.status && <div className={classes.errorMsg}>{error.message}</div>}
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
