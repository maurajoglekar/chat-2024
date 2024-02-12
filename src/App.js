import React from "react";
import { useDispatch } from "react-redux";
import { getUsersStart } from "./store/slices/userSlice";
import { getRoomsStart } from "./store/slices/roomSlice";
import { createAction } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const getUserStart = createAction("user/getUserStart");
const getRoomStart = createAction("room/getRoomStart");

const App = ({ chat }) => {
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

  console.log(`The rooms are: ${JSON.stringify(chat.rooms)}`);
  console.log(`The room is: ${JSON.stringify(chat.room)}`);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Get User</button>
      <button onClick={handleGetRoom}>Get Room</button>
    </div>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    chat: chat || {},
  };
};
export default connect(mapStateToProps, {})(App);
