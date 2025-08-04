import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const JobDetails = () => {
  const { next, prev, job, setJob } = useContext(FormContext);
  const [error, setError] = useState({});
  const departments = ["Engineering", "HR", "Sales", "Finance", "Operations"];
  const locations = ["Mangaluru","Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai","Telanagna"];
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Z0-9]+$/.test(job.employeeId || ""))
      errs.employeeId = "Employee ID must be alphanumeric";
    if (!job.department) errs.department = "Select a department";
    if (!job.role) errs.role = "Role is required";
    if (!job.joiningDate || new Date(job.joiningDate) < new Date())
      errs.joiningDate = "Joining date cannot be in the past";
    if (!job.location) errs.location = "Select a work location";
    return errs;
  };

  const handleNext = () => {
    const errs = validate();
    setError(errs);
    if (Object.keys(errs).length === 0) next();
  };

  return (
    <div className="form-step">
      <h3>Job Details</h3>

      <label>Employee ID</label>
      <input type="text" name="employeeId" value={job.employeeId || ""} onChange={handleChange} />
      {error.employeeId && <p className="error">{error.employeeId}</p>}

      <label>Department</label>
      <select name="department" value={job.department || ""} onChange={handleChange}>
        <option value="">Select Department</option>
        {departments.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select>
      {error.department && <p className="error">{error.department}</p>}

      <label>Role / Designation</label>
      <input type="text" name="role" value={job.role || ""} onChange={handleChange} />
      {error.role && <p className="error">{error.role}</p>}

      <label>Joining Date</label>
      <input type="date" name="joiningDate" value={job.joiningDate || ""} onChange={handleChange} />
      {error.joiningDate && <p className="error">{error.joiningDate}</p>}

      <label>Work Location (Search)</label>
      <input
        type="text"
        placeholder="Search Location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select name="location" value={job.location || ""} onChange={handleChange}>
        <option value="">Select Location</option>
        {locations
          .filter((loc) => loc.toLowerCase().includes(search.toLowerCase()))
          .map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
      </select>
      {error.location && <p className="error">{error.location}</p>}

      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default JobDetails;
