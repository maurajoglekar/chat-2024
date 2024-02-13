import styled from "styled-components";

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 250px);
  background-color: ${({ theme }) => theme.colors.white};

  ul.message-list {
    list-style: none;
    padding-left: 0;
    margin-left: 30px;
    width: 95%;
    font-size: 20px;
  }

  .reaction-icon {
    width: 25px;
    height: 25px;
    float: right;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};

  .message-item {
    max-width: 50%;
    width: max-content;
  }

  .message-item .message-text {
    color: ${(props) => (props.isMine ? "#FAF0E6" : "gray")};
    background-color: ${(props) => (props.isMine ? "#2D5987" : "#fff")};
    padding: 15px 20px;
    border-radius: 2em;
    margin-bottom: 1em;
  }

  .message-item .messaged-by {
    color: gray;
    padding: 5px;
    margin-bottom: 10px;
    margin-top: 5px;
    border-radius: 30px;
    font-size: 18px;
  }
`;
const MessageList = ({ userName, messages, messagesEndRef }) => {
  return (
    <StyledMessageList>
      <ul className="message-list">
        {messages.map((m) => (
          <StyledListItem key={m.id} isMine={userName === m.name}>
            <div className="message-item">
              <div className="message-container">
                <p className="message-text">{m.message}</p>
              </div>
              {userName !== m.name && <p className="messaged-by">{m.name}</p>}
            </div>
          </StyledListItem>
        ))}
      </ul>
      <div ref={messagesEndRef} />
    </StyledMessageList>
  );
};

export default MessageList;
