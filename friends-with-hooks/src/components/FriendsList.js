import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getFriendsList } from '../utilities/services';

import FriendCard from './FriendCard';

const FriendsList = () => {
  const [ friendsList, setFriendsList ] = useState([]);

  useEffect(() => {
    getFriendsList().then( res => setFriendsList(res));
  }, []);

  console.log('friendsList',friendsList)

  return(
    <main>
      <h2>Friends List</h2>
      <p></p>
      <ul className="friends-list">
          {
            friendsList && friendsList.map( (friend,i) => <FriendCard friendInfo={friend} key={i} /> )
          }
      </ul>
    </main>
  )
}

export default FriendsList;