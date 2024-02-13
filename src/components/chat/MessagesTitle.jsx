import styled from "styled-components";

const StyledMessagesTitle = styled.div`
  .room-title {
    text-align: center;
    font-size: 25px;
  }

  .room-users {
    text-align: center;
  }

  span.my-name {
    color: red;
  }
`;

const MessagesTitle = ({ name, users, userName }) => {
  let me;
  let others = "";
  const temp = users.filter((user) => user !== userName);

  if (temp.length === users.length) {
    others = users.join(", ");
  } else {
    me = userName;
    others = temp.join(", ");
  }

  return (
    <StyledMessagesTitle>
      <p className="room-title" data-test-id="room-title">
        {name}
      </p>
      <p className="room-users" data-test-id="room-users">
        {me ||
          (userName && (
            <span className="my-name" data-test-id="self">
              {me || userName}
              {", "}
            </span>
          ))}
        <span data-test-id="others">{others}</span>
      </p>
    </StyledMessagesTitle>
  );
};

export default MessagesTitle;
