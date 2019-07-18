import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <h1>Welcome</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/friendslist">Friends List</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;