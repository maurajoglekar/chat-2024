import styled from "styled-components";
import React, { useState } from "react";

const StyledMessageAddForm = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    width: 80%;
    margin: 40px 30px;
    height: 36px;
    padding: 10px 25px;
    font-size: 16px;
    color: gray;
    border: #bdbdbd solid 2px;
    color: gray;
  }

  button {
    width: 20%;
    font-size: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    border: #fff solid 0px;
    color: #6495ed;
    font-weight: bold;
    padding: 0;
  }

  button:focus {
    outline: 0;
  }
`;

const MessageAddForm = ({ roomId, userName }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    console.log(`submit add message:  ${newMessage}`);
  };

  return (
    <StyledMessageAddForm onSubmit={handleSubmit}>
      <input
        id="message"
        name="message"
        placeholder="Type a message..."
        type="text"
        value={newMessage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </StyledMessageAddForm>
  );
};

export default MessageAddForm;
