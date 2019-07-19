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
      console.log(res);
      return res.data
    })
    .catch(err => console.log('get friends list',err.response));
}