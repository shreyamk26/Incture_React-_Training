import React, { useState } from 'react';

const Task4_AddUser = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddUser = () => {
    if (!name ||!age) return;
    const newUser = {
      id: Date.now(),
      name: name,
      age: parseInt(age)
    };
    setUsers([...users, newUser]);
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Task 4: Add User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={e => setAge(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleAddUser} style={{ marginLeft: '10px' }}>
        Add User
      </button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.age})</li>
        ))}
      </ul>
    </div>
  );
};

export default Task4_AddUser;
