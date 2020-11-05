import classes from './input.module.css'
import React from 'react'

const input = ({name,fieldType,fieldConfig,value,error,changed,addRef}) => {
    // console.log(error,name);

    switch (fieldType) {
        case ('input'): {
                return <div className="form-group" key={name}>
                        <label htmlFor={name} className="text-capitalize">{name}</label>
                        {error.status && <div className={classes.errorMsg}>{error.message}</div>}
                        <input type={fieldConfig.type} 
                            className="form-control"
                            placeholder={fieldConfig.placeholder}
                            name={name}
                            id={name}
                            value={value}
                            onChange={changed}
                            ref={field => addRef(field)}>
                        </input>
                        {error.status && <span>{error.message}</span>}
                    </div>
            } 
        case ('radio'): {
                return <div class="form-group">
                    <label htmlFor={fieldConfig.name} className="mr-3">Delivery:</label>
                    {fieldConfig.values.map(val => {
                            return (
                                        <div className="form-check form-check-inline" key={name}>
                                            <input type={fieldType} 
                                                        className="form-check-input"
                                                        name={fieldConfig.name}
                                                        value={val}
                                                        onChange={changed}
                                                        ref={field => addRef(field)}>
                                            </input>
                                            <label htmlFor={fieldConfig.name} className="form-check-label text-capitalize">{val}
                                            </label>
                                            {error.status && <span>{error.message}</span>}
                                        </div>
                                    )
                        })}
                </div>
                
        }

        default:
            return <div>Default Input</div>
    }

    
}

export default input
