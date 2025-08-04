import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Documents = () => {
  const { next, prev, documents, setDocuments } = useContext(FormContext);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    if (documents.length + files.length > 5) {
      alert("You can upload a maximum of 5 files");
      return;
    }
    setDocuments([...documents, ...files]);
  };

  const removeFile = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (documents.length === 0) {
      alert("Please upload at least one document");
      return;
    }
    next();
  };

  return (
    <div className="form-step">
      <h3>Document Upload</h3>
      <input type="file" accept="application/pdf" multiple onChange={handleUpload} />

      <ul>
        {documents.map((file, i) => (
          <li key={i}>
            {file.name}
            <button onClick={() => removeFile(i)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Documents;
