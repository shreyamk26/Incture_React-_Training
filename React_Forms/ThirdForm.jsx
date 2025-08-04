import { useState } from "react";

function ThirdForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value  // name involves email and name
        });
    };

    const validate = () => {
        let errorList = {};
        if (!formData.name.trim()) {
            errorList.name = "Name is required.."; // it suggests that name is required 
        }
        if (!formData.email.trim()) {  // trim() erases extra tab spaces
            errorList.email = "Email is required.."; // it suggests email is required 
        }
     else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
    errorList.email = "Email is invalid";
}

            // corrected from errorList.name

        return errorList;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validateErros = validate();
        setErrors(validateErros);

        if (Object.keys(validateErros).length === 0) {
            alert(`Name : ${formData.name}, Email : ${formData.email}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter a name" 
                        value={formData.name} 
                        onChange={handleChange}
                    /> 
                    <br />
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
                    
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Enter a email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ThirdForm;
