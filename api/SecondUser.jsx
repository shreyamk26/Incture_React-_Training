import { useState } from "react";

function SecondUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // changed
  const [err, setErrors] = useState(null);

  const fetchdata = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Went Wrong.......");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading Users Details....Please Wait for Some Time......</p>;
  }

  if (err) {
    return <p>Error: {err}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchdata}>Fetch UserList</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> : <strong>{user.email}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondUser;