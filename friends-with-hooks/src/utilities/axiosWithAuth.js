import axios from "axios";

export const axiosWithAuth = () => {
  let token = localStorage.getItem("token");
  if(token) {
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
  } else {
    return ("Error, token does not exist");
  }
}