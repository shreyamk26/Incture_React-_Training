import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const PersonalDetails = () => {
  const { next, personal, setPersonal } = useContext(FormContext);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setPersonal({ ...personal, photo: file });
    }
  };

  const validate = () => {
    const errs = {};
    if (!personal.fullName || personal.fullName.length < 3)
      errs.fullName = "Full Name must be at least 3 characters";
    if (!/^\S+@\S+\.\S+$/.test(personal.email || ""))
      errs.email = "Invalid Email format";
    if (!/^\d{10}$/.test(personal.phone || ""))
      errs.phone = "Phone must be 10 digits";
    const age = personal.dob
      ? Math.floor((Date.now() - new Date(personal.dob)) / (365.25 * 24 * 60 * 60 * 1000))
      : 0;
    if (age < 18) errs.dob = "Must be at least 18 years old";
    return errs;
  };

  const handleNext = () => {
    const errs = validate();
    setError(errs);
    if (Object.keys(errs).length === 0) next();
  };

  return (
    <div className="form-step">
      <h3>Personal Details</h3>

      <label>Full Name</label>
      <input type="text" name="fullName" value={personal.fullName || ""} onChange={handleChange} />
      {error.fullName && <p className="error">{error.fullName}</p>}

      <label>Email</label>
      <input type="email" name="email" value={personal.email || ""} onChange={handleChange} />
      {error.email && <p className="error">{error.email}</p>}

      <label>Phone</label>
      <input type="text" name="phone" value={personal.phone || ""} onChange={handleChange} />
      {error.phone && <p className="error">{error.phone}</p>}

      <label>Date of Birth</label>
      <input type="date" name="dob" value={personal.dob || ""} onChange={handleChange} />
      {error.dob && <p className="error">{error.dob}</p>}

      <label>Profile Photo</label>
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      {preview && <img src={preview} alt="Preview" width="100" />}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalDetails;
