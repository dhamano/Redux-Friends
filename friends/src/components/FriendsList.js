import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import FriendCard from './FriendCard';
import { getFriendsList } from '../store/actions';

class FriendsList extends React.Component {

  componentDidMount() {
    this.props.getFriendsList();
  }

  render() {
    console.log('frindlist page',this.props.friendsList);
    return(
      <>
        <h2>Friends List</h2>
        <p><Link to="/addfriends">Add a friend</Link></p>
        <ul className="friends-list">
          {this.props.isFetching ?
             <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
          :
            this.props.friendsList.map( (friend,i) => <FriendCard friendInfo={friend} key={i} /> )
          }
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  error: state.friends.error,
  isFetching: state.friends.isFetching,
  friendsList: state.friends.friendsList,
});

export default connect( mapStateToProps, { getFriendsList })(FriendsList);