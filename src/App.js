import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './components/Caclulator';
import Home from './components/Home/Home';
import Quotes from './components/Quotes/Quotes';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <h1 className="logo">Math Magicians</h1>
        </div>
        <ul className="links-container">
          <li>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {' '}
          </li>
          <li>
            <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
            {' '}
          </li>
          <li>
            <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            {' '}
          </li>
        </ul>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
