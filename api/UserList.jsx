import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/use")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong....");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); //then loading function activated if we comment this 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Users Details......Please wait some time...</p>;
  }

  if (error) {
    return <p>Error : {error}</p>;
  }

  return (
    <div>
       
      <h2>User List :</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
