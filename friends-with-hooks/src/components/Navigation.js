import React from 'react';
import { NavLink } from 'react-router-dom';
import { hasLocalVar, clearLocalStorageOf } from '../utilities';

const Navigation = () => {

  const logout = () => {
    clearLocalStorageOf("token");
  }
  return(
    <nav>
      {hasLocalVar("token") ?
          (<ul>
            <li><NavLink exact to="/friends-list">Home</NavLink></li>
            <li><NavLink exact to="/add-friends">Add a friend</NavLink></li>
            <li><NavLink exact onClick={logout} to="/">Logout</NavLink></li>
          </ul>)
        :
          <NavLink exact to="/">Login</NavLink>
      }
    </nav>
  )
}

export default Navigation;