import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar.jsx';
import Login from './Component/Register-Login/Login.jsx';
import Register from './Component/Register-Login/Register.jsx';
const App = () => {
  return (
      <Router>
        <div>
          <NavBar />
          <Register/>
        </div>
      </Router>
    );
};

export default App;