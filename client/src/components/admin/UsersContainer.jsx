import React, { useEffect, useState } from 'react';

function UserContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle the loading state
  if (loading) {
    return <p>Loading users...</p>;
  }

  // Handle errors
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render the table only when data is loaded successfully
  return (
  <div style={{fontFamily:'Raleway'}}>
    <div className='user-dashboard-container'>

      <h2>USERS LIST</h2>
      <table className='table table-striped table-bordered'>
      <thead>
    <tr>
      <th style={{ width: '10%', fontSize: '14px' }}>USERNAME</th>
      <th style={{ width: '40px', fontSize: '14px' }}>FIRST</th>
      <th style={{ width: '40px', fontSize: '14px' }}>LAST</th>
      <th style={{ width: '50px', fontSize: '14px' }}>PHONE</th>
      <th style={{ width: '60px', fontSize: '14px' }}>EMAIL</th>
    </tr>
  </thead>
        <tbody className='mt-3'>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td> {/* Display the user's first name */}
              <td>{user.lastName}</td> {/* Display the user's last name */}
              <td>{user.phone}</td> {/* Display the user's phone */}
              <td>{user.email}</td> {/* Display the user's email */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default UserContainer;
