import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledLoginForm = styled.form`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  border: 1px solid gray;

  input {
    width: 400px;
    height: 30px;
    margin-top: 15px;
    padding: 0 25px;
    color: gray;
  }

  button {
    width: 400px;
    height: 36px;
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.lightNavyBlue};
    color: #fff;
    padding: 0 30px;
  }
`;

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 0) {
      navigate(`chat/${userName}`);
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <input
        id="user-name"
        name="userName"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="Type your username..."
        type="text"
      />
      <button type="submit">Join the Chat!</button>
    </StyledLoginForm>
  );
};

export default LoginForm;
