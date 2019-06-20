import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {
        !localStorage.getItem("token") ?
          <Route path="/" component={Login}  />
        :
          <p>You're Logged In!</p>
      }
    </>
  );
};

export default Home;