import React, {useState} from "react";
import "./inputField.css"


const InputField = ({label, value, onChangeFunction, placeholder }) => {
    const handleChange = (e) => {
        onChangeFunction(e.target.value);
    };

    return(
        <div className="inputField">
            <label>{label}: </label>
            <input 
                type = "text"
                value = {value}
                onChange = {handleChange}
                placeholder = {placeholder}
            />
        </div>
    );
};

export default InputField;