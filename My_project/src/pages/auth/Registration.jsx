import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

function Registration() {
  const [identityNumber, setIdentityNumber] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [registrationType, setRegistrationType] = useState('farmer'); // Default to farmer
  const [address, setAddress] = useState('');
  const [profileIcon, setProfileIcon] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registration submitted:', {
      identityNumber,
      placeOfBirth,
      registrationType,
      address,
      profileIcon,
      username,
      password,
      confirmPassword,
    });
    // Add your registration logic here
  };

  const handleProfileIconChange = (e) => {
    setProfileIcon(e.target.files[0]);
  };

  return (
    <Layout>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="identityNumber">Identity Card Number (16 Digits):</label>
          <input
            type="text"
            id="identityNumber"
            value={identityNumber}
            onChange={(e) => setIdentityNumber(e.target.value)}
            maxLength="16"
          />
        </div>
        <div>
          <label htmlFor="placeOfBirth">Place of Birth:</label>
          <input
            type="text"
            id="placeOfBirth"
            value={placeOfBirth}
            onChange={(e) => setPlaceOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="registrationType">Registration Type:</label>
          <select
            id="registrationType"
            value={registrationType}
            onChange={(e) => setRegistrationType(e.target.value)}
          >
            <option value="farmer">Farmer</option>
            <option value="transport">Transport</option>
            <option value="storage">Storage</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profileIcon">Profile Icon:</label>
          <input
            type="file"
            id="profileIcon"
            accept="image/*"
            onChange={handleProfileIconChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </Layout>
  );
}

export default Registration;