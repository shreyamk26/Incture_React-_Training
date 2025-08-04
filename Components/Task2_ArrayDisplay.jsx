import React from 'react';

const Task2_ArrayDisplay= () => {
  const users = [
    { id: 1, name: 'Shreya', age: 22 },
    { id: 2, name: 'Mike', age: 25 },
    { id: 3, name: 'Will', age: 30 },
    { id: 4, name: 'John', age: 24 }
  ];

  return (
    <div>
      <h2>Task 2: User Table</h2>
    <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task2_ArrayDisplay;
