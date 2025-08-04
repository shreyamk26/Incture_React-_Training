import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const Review = () => {
  const { setStep, personal, job, bank, emergency, documents } = useContext(FormContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    alert("Onboarding Completed Successfully!");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h2>Onboarding Completed</h2>
        <p>All details have been successfully submitted.</p>
      </div>
    );
  }

  return (
    <div className="form-step">
      <h3>Review & Submit</h3>

      <details open>
        <summary>
          Personal Details 
          <button type="button" className="edit-btn" onClick={() => setStep(1)}>Edit</button>
        </summary>
        <p><b>Name:</b> {personal.fullName}</p>
        <p><b>Email:</b> {personal.email}</p>
        <p><b>Phone:</b> {personal.phone}</p>
        <p><b>DOB:</b> {personal.dob}</p>
      </details>

      <details>
        <summary>
          Job Details
          <button type="button" className="edit-btn" onClick={() => setStep(2)}>Edit</button>
        </summary>
        <p><b>Employee ID:</b> {job.employeeId}</p>
        <p><b>Department:</b> {job.department}</p>
        <p><b>Role:</b> {job.role}</p>
        <p><b>Joining Date:</b> {job.joiningDate}</p>
        <p><b>Location:</b> {job.location}</p>
      </details>

      <details>
        <summary>
          Bank Details
          <button type="button" className="edit-btn" onClick={() => setStep(3)}>Edit</button>
        </summary>
        <p><b>Account Number:</b> {bank.accountNumber}</p>
        <p><b>IFSC:</b> {bank.ifsc}</p>
        <p><b>PAN:</b> {bank.pan}</p>
        <p><b>UPI:</b> {bank.upi}</p>
      </details>

      <details>
        <summary>
          Emergency Contacts
          <button type="button" className="edit-btn" onClick={() => setStep(4)}>Edit</button>
        </summary>
        {emergency.map((c, i) => (
          <p key={i}>{c.name} ({c.relation}) - {c.phone}</p>
        ))}
      </details>

      <details>
        <summary>
          Documents
          <button type="button" className="edit-btn" onClick={() => setStep(5)}>Edit</button>
        </summary>
        <ul>
          {documents.map((file, i) => <li key={i}>{file.name}</li>)}
        </ul>
      </details>

      <div className="review-actions">
        <button type="button" onClick={() => setStep(5)}>Previous</button>
        <button type="button" className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
