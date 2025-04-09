import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the server-side API
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Registration Page</h1>
      {user ? (
        <div>
          <h2>User Information</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Registration;
