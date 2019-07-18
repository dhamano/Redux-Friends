import React from 'react';

const FriendCard = props => {
  console.log('friend card',props);
  return(
    <div className="friend-card" id={props.friendInfo.id} >
      <dl>
        <dt>name:</dt>
        <dd>{props.friendInfo.name}</dd>
        <dt>age:</dt>
        <dd>{props.friendInfo.age}</dd>
        <dt>email:</dt>
        <dd>{props.friendInfo.email}</dd>
      </dl>
    </div>
  )
}

export default FriendCard;