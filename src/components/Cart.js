import React,{ useEffect, useState} from 'react'
import { getUsers, deleteUser } from '../api'; 
import axios from 'axios'
export default function Cart() {
 
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchUsers();
  }, []);

  const fetchUsers = async () => {
      try {
          const response = await getUsers();
          setUsers(response.data);
      } catch (error) {
          console.error('Error fetching users', error);
      }
  };

    const handleDelete = async (id) => {
      try {
          await deleteUser(id);
          fetchUsers(); // Refresh the list
      } catch (error) {
          console.error('Error deleting user', error);
      }
  };
  return (
    <div className="container">
      <h1>Data From Users</h1>
      <table class="table table-striped-columns">  

        
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Role</th>
          <th>Delete</th>
          <th>Update</th>

        </tr>
              {
                  users && users.length > 0 && users.map(user => 
                      <tr key={user.userId}>
                          <td>{ user.userId}</td>
                          <td>{ user.name}</td>
                          <td>{ user.email}</td>
                          <td>{ user.phoneNumber}</td>
                          <td>{ user.address}</td>
                          <td>{ user.role}</td>
                          <button onClick={() => handleDelete(user.userId)}>Delete</button>
                          <td></td>
                     </tr>
                     
                    )         
              }
      </table>
    </div>
  );
}

