import React, { useEffect, useState } from 'react';

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
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
    <div>
      <h1>Admin Page</h1>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} {user.isAdmin && <strong>(Admin)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
