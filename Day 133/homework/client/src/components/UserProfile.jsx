import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', status: '' });

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="m-4 p-4 bg-gray-800 rounded-md text-white">
      <h2 className="text-xl font-semibold">User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.status}</p>
    </div>
  );
}

export default UserProfile;
