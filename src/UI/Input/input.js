import classes from './input.module.css'
import React from 'react'

const input = ({name,fieldType,fieldConfig,value,error,changed,addRef}) => {

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
                    </div>
            } 
        case ('radio'): {
                return <div className="form-group">
                    <label htmlFor={fieldConfig.name} className="mr-3 text-capitalize">{name}</label>
                    {fieldConfig.values.map(val => {
                            return (
                                        <div className="form-check form-check-inline" key={val}>
                                            <input type={fieldType} 
                                                        className="form-check-input"
                                                        name={fieldConfig.name}
                                                        value={val}
                                                        checked={value===val}
                                                        onChange={changed}
                                                        ref={field => addRef(field)}>
                                            </input>
                                            <label htmlFor={fieldConfig.name} className="form-check-label text-capitalize">{val}
                                            </label>
                                        </div>
                                    )
                        })}
                    {error.status && <div className={classes.errorMsg}>{error.message}</div>}
                </div> 
        }
        case ('checkbox'): {
                return <div className="form-group">
                    <label htmlFor={fieldConfig.name} className="mr-3 text-capitalize">{name}</label>
                    {fieldConfig.values.map(val => {
                            return (
                                        <div className="form-check form-check-inline" key={val}>
                                            <input type={fieldType} 
                                                        className="form-check-input"
                                                        name={fieldConfig.name}
                                                        value={val}
                                                        checked={value.find(v => v === val) ? true:false}
                                                        onChange={changed}
                                                        ref={field => addRef(field)}>
                                            </input>
                                            <label htmlFor={fieldConfig.name} className="form-check-label text-capitalize">{val}
                                            </label>
                                        </div>
                                    )
                        })}
                    {error.status && <div className={classes.errorMsg}>{error.message}</div>}
                </div> 
        }

        case ('select'): {
            let select;
            const options = fieldConfig.values.map((val) => {
                return <option key={val} value={val}>{val}</option>
                }) 
                    

            if (fieldConfig.type === 'multiple') {
                select = (<select className='custom-select' name={fieldConfig.name} onChange={changed} value={value} multiple>
                            {options}
                        </select>);
            }
            else {
                select = (<select className='custom-select' name={fieldConfig.name} onChange={changed} defaultValue={name}
                value={value[0]}
                >
                            <option value={name} disabled>{name}</option>
                            {options}
                        </select>);
            };

            return <div className="form-group">
                        <label htmlFor={fieldConfig.name} className="mr-3 text-capitalize">{name}</label>
                        {select}
                        {error.status && <div className={classes.errorMsg}>{error.message}</div>}
            </div>
        }

        default:
            return <div>Default Input</div>
    }
}

export default input
