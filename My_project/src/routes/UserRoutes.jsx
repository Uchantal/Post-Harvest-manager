import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout'; // Correct import
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';
import Blog from '../pages/Blog'; // Imported Blog

function UserRoutes({ user, login, logout }) {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="/blog" element={<Blog />} /> {/* Add Blog route */}
      </Route>
    </Routes>
  );
}

export default UserRoutes;




