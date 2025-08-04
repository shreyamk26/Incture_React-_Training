import { useState } from "react";

function Task() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:"",
        confirmPassword:""
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
        if (!formData.password.trim()) {
            errorList.password = "Password is required..";
        } 

         else if (formData.password.length < 3) {
            errorList.password = "Password must be at least 3 characters"; //min 3 length
        }
        if (!formData.confirmPassword.trim()) {
            errorList.confirmPassword = "Confirm password is required..";
        } 

        else if (formData.confirmPassword !== formData.password) {
            errorList.confirmPassword = "Passwords do not match";
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
                    <label htmlFor="name">Name : </label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter a name" 
                        value={formData.name} 
                        onChange={handleChange}
                    /> 
                    
                    <br /> <br />
                    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
                    
                    <label htmlFor="email">Email : </label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Enter a email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                    <br /> <br />
                    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

                    <label htmlFor="password">Password : </label>
                     <input 
                        name="password" 
                        type="password" 
                        placeholder="Enter password" 
                        value={formData.password} 
                        onChange={handleChange}
                    />
                    <br /> <br />
                    {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                    
                    <label htmlFor="password">Confirm Password : </label>
                    <input 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="Confirm password" 
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}


                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task;
