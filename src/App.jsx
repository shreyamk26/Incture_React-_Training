import { useContext } from "react";
import { FormProvider, FormContext } from "./context/FormContext";
import PersonalDetails from "./steps/PersonalDetails";
import JobDetails from "./steps/JobDetails";
import BankDetails from "./steps/BankDetails";
import Emergency from "./steps/Emergency";
import Documents from "./steps/Documents";
import Review from "./steps/Review";
import "./App.css";

function AppContent() {
  const { step } = useContext(FormContext);

  return (
    <div className="container">
      <h2>Enterprise Employee Onboarding</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 6) * 100}%` }}></div>
      </div>

      {step === 1 && <PersonalDetails />}
      {step === 2 && <JobDetails />}
      {step === 3 && <BankDetails />}
      {step === 4 && <Emergency />}
      {step === 5 && <Documents />}
      {step === 6 && <Review />}
    </div>
  );
}

function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  );
}

export default App;
