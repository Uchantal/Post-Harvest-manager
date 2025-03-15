import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/auth/Login.jsx';
import Registration from '../pages/auth/Registration.jsx';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;


