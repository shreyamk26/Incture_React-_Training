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
    </div>
  );
};

export default Task1_NameList;
