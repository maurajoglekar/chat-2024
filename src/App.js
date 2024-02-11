import React from "react";
import { useDispatch } from "react-redux";
import { getUsersStart } from "./store/slices/userSlice";
import { getRoomsStart } from "./store/slices/roomSlice";
import { createAction } from "@reduxjs/toolkit";
const getUserStart = createAction("user/getUserStart");
const getRoomStart = createAction("room/getRoomStart");
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsersStart());
  }, []);
  React.useEffect(() => {
    dispatch(getRoomsStart());
  }, []);
  const handleClick = () => {
    dispatch(getUserStart(1));
  };
  const handleGetRoom = () => {
    dispatch(getRoomStart(1));
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Get User</button>
      <button onClick={handleGetRoom}>Get Room</button>
    </div>
  );
};

export default App;
