import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // 👈 NEW loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 Show spinner
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('https://petservice-wx2h.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: identifier, username: identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        navigate('/home');
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // 👈 Hide spinner
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="identifier">Email or Username</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Enter your email or username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {loading && <div className="spinner"></div>}

        <p className="signup-text">
          Don't have an account? <a href="/Signup" className="signup-link">Signup</a>
        </p>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Login;
