import React, { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserRoutes from './routes/UserRoutes'; // Correct usage

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    role: null,
  });

  const login = (role) => setUser({ isLoggedIn: true, role });
  const logout = () => setUser({ isLoggedIn: false, role: null });

  return (
    <div className="App">
      <Navbar />
      <UserRoutes user={user} login={login} logout={logout} />
    </div>
  );
}

export default App;
