import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const Emergency = () => {
  const { next, prev, emergency, setEmergency } = useContext(FormContext);
  const [error, setError] = useState({});
  const relations = ["Parent", "Sibling", "Spouse", "Friend", "Relative"];

  const handleChange = (index, e) => {
    const newContacts = [...emergency];
    newContacts[index][e.target.name] = e.target.value;
    setEmergency(newContacts);
  };

  const addContact = () => setEmergency([...emergency, { name: "", relation: "", phone: "" }]);
  const removeContact = (index) => setEmergency(emergency.filter((_, i) => i !== index));

  const validate = () => {
    const errs = {};
    emergency.forEach((c, idx) => {
      if (!c.name || c.name.length < 3) errs[`name${idx}`] = "Name must be ≥ 3 letters";
      if (!c.relation) errs[`relation${idx}`] = "Select relation";
      if (!/^\d{10}$/.test(c.phone || "")) errs[`phone${idx}`] = "Phone must be 10 digits";
    });
    return errs;
  };

  const handleNext = () => {
    const errs = validate();
    setError(errs);
    if (Object.keys(errs).length === 0) next();
  };

  return (
    <div className="form-step">
      <h3>Emergency Contacts</h3>

      {emergency.map((c, idx) => (
        <div key={idx} className="contact-card">
          <label>Name</label>
          <input type="text" name="name" value={c.name} onChange={(e) => handleChange(idx, e)} />
          {error[`name${idx}`] && <p className="error">{error[`name${idx}`]}</p>}

          <label>Relation</label>
          <select name="relation" value={c.relation} onChange={(e) => handleChange(idx, e)}>
            <option value="">Select Relation</option>
            {relations.map((r, i) => (
              <option key={i} value={r}>{r}</option>
            ))}
          </select>
          {error[`relation${idx}`] && <p className="error">{error[`relation${idx}`]}</p>}

          <label>Phone</label>
          <input type="text" name="phone" value={c.phone} onChange={(e) => handleChange(idx, e)} />
          {error[`phone${idx}`] && <p className="error">{error[`phone${idx}`]}</p>}

          <button onClick={() => removeContact(idx)}>Remove</button>
          <hr />
        </div>
      ))}

      <button onClick={addContact}>Add Contact</button>

      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Emergency;
