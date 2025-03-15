import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx'; // Corrected import path

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
