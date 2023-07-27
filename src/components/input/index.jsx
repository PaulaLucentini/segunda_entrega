/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './styles.css';

const Input = ({
    placeholder, 
    type='text', 
    id, 
    required=false, 
    name,
    onFocus,
    onBlur,
    onChange,
    value,
    className
}) => {
    return (
        <div className={className}>
           <input
        id={id} 
        placeholder={placeholder}
        type={type}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        />
        <label htmlFor={id}>
            {name}
        </label> 

        </div>
        
    )
}
export default Input;
