import React from 'react';

const Task1_NameList = () => {
  const names = ['Shreya', 'Mike', 'Will', 'John'];

  return (
    <div>
      <h2>Task 1: Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* Render SecondList inside Task1_NameList */}
      <SecondList />
    </div>
  );
};

// Additional component: SecondList
function SecondList() {
  const students = [
    { id: 111, name: 'Shreya', city: 'Kundapura' },
    { id: 222, name: 'Mike', city: 'Adyar' },
    { id: 333, name: 'Alice', city: 'Mysore' },
    { id: 444, name: 'Will', city: 'Mangaluru' },
  ];

  return (
    <div>
      <h2>Student List:</h2>
      {students.map((student) => (
        <p key={student.id}>
          Name: {student.name} | City: {student.city}
        </p>
      ))}
    </div>
  );
}

export default Task1_NameList;
