import React, { useEffect, useState } from 'react';
import api from '../api';

function TaskFirst () {
  const [name, setName] = useState('');
  const [tech, setTech] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get('/api/users');
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !tech) return alert('Both fields are required');
    await api.post('/api/submit', { name, tech });
    setName('');
    setTech('');
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4 text-center">Submit Your Favorite Tech</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Your Name</label>
            <input
              id="nameInput"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="techInput" className="form-label">Favorite Tech</label>
            <input
              id="techInput"
              type="text"
              className="form-control"
              placeholder="Enter your favorite tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>

      <div className="mt-5">
        <h4 className="mb-3">Submitted Users</h4>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>{user.name}</strong> — {user.tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskFirst ;
