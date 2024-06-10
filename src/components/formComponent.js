import React, { useState } from "react";

const Form = (props) => {

    const [FormValue, setFormValue] = useState('Nothing');
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h1> {FormValue} </h1>


            <form onSubmit={handleSubmit}>

                {props.field.map((fieldName) => (
                    <div key={fieldName}>
                        <label>
                            {fieldName}:
                            <input type="text" name={fieldName} value={formData[fieldName] || ''} onChange={handleInputChange} />
                        </label>
                    </div>
                ))}
                <input type="submit" value="Submit" />

            </form>

        </div>

    )
}


export default Form;

