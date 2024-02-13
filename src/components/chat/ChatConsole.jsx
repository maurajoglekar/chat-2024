import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  getRoomsStart,
  getRoomMessagesStart,
  getRoomStart,
} from "../../store/slices/roomSlice";

import { connect, useDispatch } from "react-redux";
import Nav from "./Nav";
import ChatContent from "./ChatContent";

const StyledChatConsole = styled.div`
  display: flex;

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
  }, [roomId]);
  useEffect(() => {
    dispatch(getRoomMessagesStart(roomId));
  }, [roomId]);

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
          roomId={roomId || 0}
          rooms={chat.rooms}
          userName={userName}
          messages={chat.messages}
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
