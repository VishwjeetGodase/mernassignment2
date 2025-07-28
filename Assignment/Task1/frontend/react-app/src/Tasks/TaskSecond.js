// TaskSecond.js
import React, { useEffect, useState } from 'react';

const TaskSecond = () => {
  const [userData, setUserData] = useState(null);

  // Dummy raw API response
  const rawApiResponse = {
    user: {
      name: "Isha",
      skills: "Java,React,Node",
      active: "yes",
      joined: "2023-06-14"
    }
  };

  // Transform function
  const transformUserData = (data) => {
    const { name, skills, active, joined } = data.user;
    return {
      name,
      skills: skills.split(','),
      active: active.toLowerCase() === 'yes',
      joined: new Date(joined).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  };

useEffect(() => {
  const transformed = transformUserData(rawApiResponse);
  console.log(JSON.stringify(transformed, null, 2)); // Logs formatted JSON
  setUserData(transformed);
}, []);


  return (
    <div className="container mt-5">
      <h2>Task 2: API Debugging Result</h2>
      {userData ? (
        <div className="card p-3 mt-4">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Skills:</strong> {userData.skills.join(', ')}</p>
          <p><strong>Active:</strong> {userData.active ? 'Yes' : 'No'}</p>
          <p><strong>Joined:</strong> {userData.joined}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskSecond;
