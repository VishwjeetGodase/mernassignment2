import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const handleAuth = async () => {
    try {
      setError('');
      const endpoint = isLogin ? '/login' : '/register';
      const res = await api.post(endpoint, { username, password });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
        setUsername('');
        setPassword('');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken('');
    setUsername('');
    setPassword('');
    setIsLogin(true);
  };

  if (token) {
    return (
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h3 className="text-center">JWT Token Stored in LocalStorage (Stay Login) </h3>
          <div className="bg-light border p-3 mt-3 mb-3 text-break" style={{ fontSize: '14px' }}>
            {token}
          </div>
          <button className="btn btn-danger w-100" onClick={clearToken}>
            Clear Token
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h3>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button className="btn btn-primary w-100 mb-3" onClick={handleAuth}>
          {isLogin ? 'Login' : 'Register'}
        </button>

        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            className="btn btn-link p-0"
            style={{ fontSize: '14px' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
