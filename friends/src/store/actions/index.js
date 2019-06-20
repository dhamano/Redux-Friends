import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
const baseURL = "//localhost:5000";

export const login = credentials => dispatch => {
  console.log('login start');
  dispatch({ type: LOGIN_START }, console.log('dispatch'));
  return axios.post(`${baseURL}/api/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      });
      return true;
    })
    .catch(err => console.log('err',err));
}

export const GET_FRIENDS_LIST_SUCCESS = "GET_FRIENDS_LIST_SUCCESS";
export const GET_FRIENDS_LIST = "GET_FRIENDS_LIST";
export const GET_FRIENDS_LIST_FAIL = "GET_FRIENDS_LIST_FAIL";

export const getFriendsList = () => dispatch => {
  dispatch({ type: GET_FRIENDS_LIST });
  axiosWithAuth().get(`${baseURL}/api/friends`)
    .then(res => {
      dispatch({
        type: GET_FRIENDS_LIST_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}

export const ADD_FRIENDS = "ADD_FRIENDS";
export const ADD_FRIENDS_SUCCESS = "ADD_FRIENDS_SUCCESS";
export const ADD_FRIENDS_FAIL = "ADD_FRIENDS_FAIL";

export const addFriend = friendInfo => dispatch => {
  dispatch({ type: ADD_FRIENDS });
  axiosWithAuth().post(`${baseURL}/api/friends`, friendInfo)
    .then(res => {
      dispatch({
        type: ADD_FRIENDS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}