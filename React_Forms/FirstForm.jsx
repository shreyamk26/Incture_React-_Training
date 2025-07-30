import { useState } from "react";

function FirstForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleonChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`);
    };
    console.log("First Form Componnet Rendered");

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Enter name" 
                    onChange={handleonChange} 
                /> 
                <br />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={handleonChange} 
                /> 
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FirstForm;
