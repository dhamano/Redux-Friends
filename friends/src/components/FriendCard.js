import React from 'react';

const FriendCard = props => {
  return (
    <li className="friend-card">
      <dl>
        <dt>name:</dt>
        <dd>{props.friendInfo.name}</dd>
        <dt>age:</dt>
        <dd>{props.friendInfo.age}</dd>
        <dt>email:</dt>
        <dd><a href={`mailto:${props.friendInfo.email}`} title={props.friendInfo.email}>email</a></dd>
      </dl>
    </li>
  )
};

export default FriendCard;