import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import ToDoList from './ToDoList';
import PomodoroTimer from './Pomodoro';
import './NavBar.css';

function NavigationItem({ to, label }) {
  return (
    <li>
      <NavLink to={to} activeClassName="active">{label}</NavLink>
    </li>
  );
}

function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <NavigationItem to="/" label="Home" />
            <NavigationItem to="/todolist" label="ToDo List" />
            <NavigationItem to="/contact" label="Contact" />
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/contact" element={<PomodoroTimer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
