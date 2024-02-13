import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getRoomsStart } from "../../store/slices/roomSlice";
import { createAction } from "@reduxjs/toolkit";
import { connect, useDispatch } from "react-redux";
import Nav from "./Nav";
import ChatContent from "./ChatContent";

const getRoomStart = createAction("room/getRoomStart");

const StyledChatConsole = styled.div`
  display: flex;
  min-height: 100vh;

  section {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const ChatConsole = ({ chat }) => {
  const { userName } = useParams();
  const [roomId, setRoomId] = useState(0);

  const updateRoom = (newid) => {
    setRoomId(newid);
  };
  // Call the APIs to get the data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsStart());
  }, []);
  useEffect(() => {
    dispatch(getRoomStart(roomId));
  }, []);

  console.log(`The rooms are: ${JSON.stringify(chat ?? chat.rooms)}`);
  console.log(`The room is: ${JSON.stringify(chat)}`);

  return (
    <StyledChatConsole>
      <Nav
        roomId={roomId || 0}
        rooms={chat.rooms}
        updateRoom={updateRoom}
        userName={userName}
      />
      <section>
        <ChatContent
          // addRoomMessage={addRoomMessage}
          // addRoomMessageReaction={addRoomMessageReaction}
          roomId={roomId || 0}
          rooms={chat.rooms}
          userName={userName}
        />
      </section>
    </StyledChatConsole>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    chat: chat || {},
  };
};
export default connect(mapStateToProps, {})(ChatConsole);
