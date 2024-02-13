import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = () => axios.get(url);
export const fetchUser = (id) => axios.get(`${url}/${id}`);

// Url for my server on render
const myurl = "https://mjserver.onrender.com/api/rooms";
// const myurl = "http://localhost:8080/api/rooms";

export const fetchRooms = () => axios.get(myurl);
export const fetchRoom = (roomId) => axios.get(`${myurl}/${roomId}`);
export const fetchRoomMessages = (roomId) =>
  axios.get(`${myurl}/${roomId}/messages`);
export const addRoomMessage = ({ roomId, name, message }) => {
  const dataObj = {
    name,
    message,
  };
  return axios.post(`${myurl}/${roomId}/messages`, dataObj);
};
