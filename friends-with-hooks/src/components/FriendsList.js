import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { getFriendsList } from '../utilities/services';

import FriendCard from './FriendCard';

const FriendsList = () => {
  const [ friendsList, setFriendsList ] = useState(null);

  useEffect(() => {
    getFriendsList().then( res => setFriendsList(res) );
  }, []);

  console.log('friendsList',friendsList)

  if(!friendsList) {
    return <Loader type="Ball-Triangle" color="#00BFFF" height="200" width="200" />
  }

  return(
    <main>
      <h2>Friends List 90&rsquo;s(ish) Style</h2>
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