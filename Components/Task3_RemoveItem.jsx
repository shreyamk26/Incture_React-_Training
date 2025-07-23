import React, { useState } from 'react';

const Task3_RemoveItem= () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Shreya'},
    { id: 2, name: 'Mike'},
    { id: 3, name: 'Will' },
     { id: 4, name: 'John'}
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Task 3: Delete User</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task3_RemoveItem;
