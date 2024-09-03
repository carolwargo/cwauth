import React, { useEffect, useState } from 'react';

function ContactsContainer() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contacts from the backend
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/contacts');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='user-dashboard-container'>
      <h2>Contacts List</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th style={{ fontSize: '14px' }}>NAME</th>
            <th style={{ fontSize: '14px' }}>EMAIL</th>
            <th style={{ fontSize: '14px' }}>MESSAGE</th>
            <th style={{ fontSize: '14px' }}>DATE</th>
          </tr>
        </thead>
        <tbody className='mt-3'>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsContainer;
