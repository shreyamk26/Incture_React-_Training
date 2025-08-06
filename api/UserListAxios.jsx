import axios from "axios";
import { useState,useEffect } from "react"
const UserListAxios=()=>{
    const [users,setUsers]=useState([])
     
    const [loading,setLoading]=useState(true)
        
    const [err,setErrors]=useState(null)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setUsers(response.data);
        setLoading(false);

    })
    .catch((err)=>{
        setErrors(err.message);
        setLoading(false)
    })
  },[])
  if(loading){
    return <p>Loading User Details</p>
  }
  if(err)
  {
    return <p>Error:{err}</p>
  }
  return(
    <div>
        <h2>User List With Axios:</h2>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <strong>{user.name}:{user.email}</strong>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default UserListAxios;