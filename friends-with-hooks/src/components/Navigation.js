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
          (<>
            <NavLink exact to="/friends-list">Home</NavLink>
            <NavLink exact to="/add-friends">Add a friend</NavLink>
            <NavLink exact onClick={logout} to="/">Logout</NavLink>
          </>)
        :
          <NavLink exact to="/">Login</NavLink>
      }
    </nav>
  )
}

export default Navigation;