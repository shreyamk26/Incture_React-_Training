import { useState } from "react";

function NewComp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Paragraph Visibility Example</h2>
      <button onClick={() => setShow(!show)}>
        {show? "Hide" : "Show"} Paragraph
      </button>

     { show && <p>This is a paragraph that can be hidden or shown.</p>}
    </div>
  );
}

export default NewComp;
