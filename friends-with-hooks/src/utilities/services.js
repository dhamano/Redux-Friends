import { axiosWithAuth } from './axiosWithAuth';
export const baseUrl="//localhost:5000";

////////////////////////
//                    //
//  Get Friends List  //
//                    //
////////////////////////

export const getFriendsList = () => {
  return axiosWithAuth().get(`${baseUrl}/api/friends`)
    .then(res => {
      return res.data
    })
    .catch(err => console.log('get friends list',err.response));
}

export const postFriendToList = (friendInfo, formikBag) => {
  console.log('postfriend');
  return axiosWithAuth().post(`${baseUrl}/api/friends`, friendInfo)
    .then( res => {
      formikBag.props.history.push("/friends-list");
    })
    .catch( err => console.log(err) );
}

export const updateFriend = (friendInfo, formikBag) => {
  console.log('updateFriend');
  return axiosWithAuth().put(`${baseUrl}/api/friends/${friendInfo.id}`, friendInfo)
    .then( res => {
      formikBag.props.history.push("/");
    })
    .catch( err => console.log(err) );
}