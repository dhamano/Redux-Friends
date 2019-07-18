import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './store/logic/PrivateRoute';

import Navigation from './components/Navigation';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <PrivateRoute path="/friendslist" component={FriendsList} />
      <PrivateRoute path="/addfriends" component={AddFriendForm} />
    </div>
  );
}

export default App;
