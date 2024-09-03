import React, { useEffect, useState } from 'react';

function SubscribersContainer() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch subscribers from the backend
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/subscribers');
        if (!response.ok) {
          throw new Error('Failed to fetch subscribers');
        }
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) {
    return <p>Loading subscribers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='user-dashboard-container'>
      <h2>Subscribers List</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th style={{ fontSize: '14px' }}>EMAIL</th>
            <th style={{ fontSize: '14px' }}>DATE</th>
          </tr>
        </thead>
        <tbody className='mt-3'>
          {subscribers.map(subscriber => (
            <tr key={subscriber._id}>
              <td>{subscriber.email}</td>
              <td>{new Date(subscriber.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscribersContainer;
