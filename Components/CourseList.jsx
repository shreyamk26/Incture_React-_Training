import { useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([
    { id: 100, name: "JavaScript" },
    { id: 200, name: "Java" },
    { id: 300, name: "Python" },
    { id: 400, name: "C++" } 
  ]);

  const handleDeleteButton = (id) => {
    const newCourse= courses.filter((c) => c.id !== id);
    setCourses(newCourse);
  };

  return (
    <div>
      <h2>Course List:</h2>
      {courses.map((c) => (
        <div key={c.id}>
          {c.name}
          <button onClick={() => handleDeleteButton(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
