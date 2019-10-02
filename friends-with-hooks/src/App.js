import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';
import { hasLocalVar } from './utilities';

import Navigation from './components/Navigation';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" render={ props => {
        return hasLocalVar("token") ? <Redirect to="/friends-list" /> : <Login {...props} />
      }} />
      <PrivateRoute path="/friends-list" component={FriendsList} />
      <PrivateRoute path="/add-friends" component={AddFriend} />
    </div>
  );
}

export default App;
