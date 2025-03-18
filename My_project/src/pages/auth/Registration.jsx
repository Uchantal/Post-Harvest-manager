import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Assuming you have an Auth.css file

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setError('Please select a role.');
      return;
    }
    // In a real application, you'd send this data to your backend
    console.log('Registration:', { username, email, password, role });
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="farmer">Farmer</option>
          <option value="transporter">Transporter</option>
          <option value="storageProvider">Storage Provider</option>
        </select>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Registration;