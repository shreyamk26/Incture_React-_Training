import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const BankDetails = () => {
  const { next, prev, bank, setBank } = useContext(FormContext);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setBank({ ...bank, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!/^\d{9,18}$/.test(bank.accountNumber || ""))
      errs.accountNumber = "Account Number must be 9-18 digits";
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(bank.ifsc || ""))
      errs.ifsc = "Invalid IFSC Code";
    if (!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(bank.pan || ""))
      
      errs.pan = "Invalid PAN format";
    if (bank.upi && !bank.upi.includes("@"))
      errs.upi = "UPI ID must contain @";
    return errs;
  };

  const handleNext = () => {
    const errs = validate();
    setError(errs);
    if (Object.keys(errs).length === 0) next();
  };

  return (
    <div className="form-step">
      <h3>Bank Details</h3>

      <label>Bank Account Number</label>
      <input type="text" name="accountNumber" value={bank.accountNumber || ""} onChange={handleChange} />
      {error.accountNumber && <p className="error">{error.accountNumber}</p>}

      <label>IFSC Code</label>
      <input type="text" name="ifsc" value={bank.ifsc || ""} onChange={handleChange} />
      {error.ifsc && <p className="error">{error.ifsc}</p>}

      <label>PAN Number</label>
      <input type="text" name="pan" value={bank.pan || ""} onChange={handleChange} />
      {error.pan && <p className="error">{error.pan}</p>}

      <label>UPI ID (optional)</label>
      <input type="text" name="upi" value={bank.upi || ""} onChange={handleChange} />
      {error.upi && <p className="error">{error.upi}</p>}

      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default BankDetails;
