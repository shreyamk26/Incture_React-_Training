import React from "react";
import { useForm } from "react-hook-form";

const HookFormValid = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert("Registration Successful\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Register:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /(.+)@(.+){2,}\.(.+){2,}/,
                message: "Invalid email format"
              }
            })}
            placeholder="Enter your email"
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            placeholder="Enter a password"
          />
          {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") ||"Passwords do not match"
            })}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword.message}</div>
          )}
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "10px" }}>
          <label>Gender:</label><br />
          <label>
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: "Gender is required" })}
            />{" "}
            Male
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value="Female"
              {...register("gender", { required: "Gender is required" })}
            />{" "}
            Female
          </label>
          {errors.gender && <div style={{ color: "red" }}>{errors.gender.message}</div>}
        </div>

        {/* City */}
        <div style={{ marginBottom: "10px" }}>
          <label>City:</label>
          <select
            {...register("city", { required: "City is required" })}
            defaultValue=""
          >
            <option value="" disabled>Select a City</option>
            <option value="Mangalore">Mangalore</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {errors.city && <div style={{ color: "red" }}>{errors.city.message}</div>}
        </div>

        {/* Terms */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              {...register("terms", { required:"You must accept the terms and conditions" })}
            />{" "}
            I accept the Terms and Conditions
          </label>
          {errors.terms && <div style={{ color: "red" }}>{errors.terms.message}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HookFormValid;
