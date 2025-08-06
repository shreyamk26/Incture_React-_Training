import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./UserAction";
import { useEffect } from "react";

function Fetch() {

const { loading, users, error } = useSelector((state) => state);



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading User Details</p>;
  }

  if (error) { 
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User from API :</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>
              {user.name}: {user.email}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;