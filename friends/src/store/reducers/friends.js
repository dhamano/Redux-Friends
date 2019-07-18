import {
  GET_FRIENDS_LIST,
  GET_FRIENDS_LIST_SUCCESS,
  GET_FRIENDS_LIST_FAIL,
  ADD_FRIENDS,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAIL
} from '../actions/';

const initialState = {
  error: "",
  friendsList: [],
  isFetching: false,
  isAdding: false,
}

export const friends = (state = initialState, action) => {
  switch(action.type) {
    case GET_FRIENDS_LIST:
      return {
        ...state,
        error: "",
        friendsList: [],
        isFetching: true,
      }
    case GET_FRIENDS_LIST_SUCCESS:
      console.log('success',action.payload);
      return {
        ...state,
        error: "",
        friendsList: action.payload,
        isFetching: false,
      }
    case GET_FRIENDS_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        friendsList: [],
        isFetching: false,
      }
    case ADD_FRIENDS:
      return {
        ...state,
        error: "",
        friendsList: [],
        isAdding: true,
      }
    case ADD_FRIENDS_SUCCESS:
      console.log('success',action.payload);
      return {
        ...state,
        error: "",
        friendsList: action.payload,
        isAdding: false,
      }
    case ADD_FRIENDS_FAIL:
      return {
        ...state,
        error: action.payload,
        friendsList: [],
        isAdding: false,
      }
    default:
      return state;
  }
}