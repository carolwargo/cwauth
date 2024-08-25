import React, { useEffect, useState } from 'react';

function AdminPage() {
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

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='user-dashboard-container'>
      <h2>User List</h2>
      <table className='table table-striped  table-bordered'>
        <thead>
          <tr>
            <th style={{fontSize:'14px'}}>USERNAME</th>
            <th style={{fontSize:'14px'}}>ADMIN</th>
            <th style={{fontSize:'14px'}}>FIRST</th>
            <th style={{fontSize:'14px'}}>LAST</th>
            <th style={{fontSize:'14px'}}>PHONE</th>
            <th style={{fontSize:'14px'}}>EMAIL</th>
            <th style={{fontSize:'14px'}}>SUBSCRIBED</th>
          </tr>
        </thead>
        <tbody className='mt-3'>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.isAdmin ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
