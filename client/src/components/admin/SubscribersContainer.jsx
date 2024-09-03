import React, { useEffect, useState } from 'react';

function SubscribersContainer() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch subscriptions from the backend
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/subscription'); // Ensure this URL matches your route
        if (!response.ok) {
          throw new Error('Failed to fetch subscriptions');
        }
        const data = await response.json();
        setSubscriptions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSubscriptions();
  }, []);
  
  return (
    <div className='subscriber-dashboard-container'>
      <h2>Subscription List</h2>
      <table className='table table-striped table-bordered'
        style={{fontSize:'14px'}}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map(sub => (
            <tr key={sub._id}>
              <td>{sub.email}</td>
              <td>{new Date(sub.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscribersContainer;

