import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../store/actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
      .then(res => {
        if (res) {
          this.props.history.push("/friendslist")
        }
      });
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  render(){
    console.log('props isloggingin',this.props.isLoggingIn);
    return(
      <form className="login" onSubmit={this.login}>
        <label htmlFor="username"></label>
        <input type="text" onChange={this.handleChange} value={this.state.credentials.username} name="username" placeholder="username" id="username" required />
        <input type="password" onChange={this.handleChange} value={this.state.credentials.password} name="password" placeholder="password" id="password" required />
        <button type="submit" name="submit">{this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log In"
            )}</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isLoggingIn: state.isLoggingIn
});

export default connect( mapStateToProps, { login })(Login);