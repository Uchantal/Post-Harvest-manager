import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import './index.css'; // <-- Import your global CSS here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  </React.StrictMode>
);





