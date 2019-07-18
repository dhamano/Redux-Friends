import { combineReducers } from 'redux';
import { friends } from './friends';
import { login } from './login';

export default combineReducers({
  login,
  friends
});
