import styled from "styled-components";
import MessagesTitle from "./MessagesTitle";
import MessageList from "./MessageList";
import MessageAddForm from "./MessageAddForm";

const StyledChatContent = styled.div`
  .title-section {
    display: block;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid #e0e0e0;
    color: gray;
  }

  .add-message-section {
    height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid #e0e0e0;
  }
`;
const ChatContent = ({ roomId, rooms, userName, messages }) => {
  const selectedRoom = rooms.find((room) => room.id === roomId);
  const name = selectedRoom && selectedRoom.name ? selectedRoom.name : "";
  const users = messages.map((message) => message.name);
  return (
    <StyledChatContent>
      <section className="title-section">
        <MessagesTitle name={name} userName={userName} users={users} />
      </section>
      <section className="messages-section">
        <MessageList
          // addRoomMessageReaction={addRoomMessageReaction}
          messages={messages}
          // messagesEndRef={messagesEndRef}
          userName={userName}
          roomId={roomId}
        />
      </section>
      <section className="add-message-section">
        <MessageAddForm
          // addRoomMessage={addRoomMessage}
          // messagesEndRef={messagesEndRef}
          // scrollToBottom={scrollToBottom}
          roomId={roomId}
          userName={userName}
        />
      </section>
    </StyledChatContent>
  );
};

export default ChatContent;
