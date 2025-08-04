import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [personal, setPersonal] = useState({});
  const [job, setJob] = useState({});
  const [bank, setBank] = useState({});
  const [emergency, setEmergency] = useState([]);
  const [documents, setDocuments] = useState([]);

  const next = () => setStep((prev) =>prev + 1);
  const prev = () => setStep((prev) =>prev - 1);

  return (
    <FormContext.Provider
      value={{
        step, setStep, next, prev,
        personal, setPersonal,
        job, setJob,
        bank, setBank,
        emergency, setEmergency,
        documents, setDocuments,
      }}
    >
     {children}
    </FormContext.Provider>
  );
};
