import styled from "styled-components";

const StyledMessagesTitle = styled.div`
  .room-title {
    text-align: center;
    font-size: 22px;
    margin-top: 8px;
  }

  .room-users {
    text-align: center;
    margin: 1.5em 0;
    font-size: 14px;
  }

  span.my-name {
    color: red;
  }
`;

const MessagesTitle = ({ name, users, userName }) => {
  let me;
  let othersStr = "";
  const others = users.filter((user) => user !== userName);

  const noDupOthers = new Set();
  others.forEach((user) => {
    noDupOthers.add(user);
  });

  othersStr = `, ${Array.from(noDupOthers).join(", ")}`;

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
            </span>
          ))}
        <span data-test-id="others">{othersStr}</span>
      </p>
    </StyledMessagesTitle>
  );
};

export default MessagesTitle;
