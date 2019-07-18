import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import { addFriend } from '../store/actions';

class AddFriendForm extends React.Component {
  state = {
    name : '',
    age   : 0,
    email : ''
  }

  onSubmitAddToServer = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  openModalFriend = event => {
    this.props.history.push("/edit-friend")
  }

  closeModalFriend = event => {
    this.props.history.push("/");
  }

  render() {
    console.log('editfriendform',this.props);
    return (
      this.props.isAdding ?
        <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      :
      (
        <React.Fragment>
          <div>
            <form onSubmit={this.onSubmitAddToServer} className="friend-form">
              <h2>Add a Friend</h2>
              <dl>
                <dt><label htmlFor="name"><span>Name:</span></label></dt>
                <dd><input type="text" onChange={this.onChangeHandler} placeholder="name" id="name" name="name" value={this.state.name} required /></dd>
                <dt className="half"><label htmlFor="age"><span>Age:</span></label></dt>
                <dd className="half"><input type="number" onChange={this.onChangeHandler} name="age" value={this.state.age} required /></dd>
                <dt><label htmlFor="email"><span>Email:</span></label></dt>
                <dd><input type="email" onChange={this.onChangeHandler} placeholder="email" name="email" value={this.state.email} required /></dd>
              </dl>
              <button type="submit">Submit</button>
            </form>
          </div>
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => ({
  isAdding: state.friends.isAdding
});

export default connect( mapStateToProps, { addFriend })(AddFriendForm);