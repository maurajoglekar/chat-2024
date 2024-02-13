import styled from "styled-components";
import { useState } from "react";

const StyledNavList = styled.div`
  p {
    height: 48px;
  }

  p.selected-room {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
const NavList = ({ roomId, rooms, updateRoom }) => {
  return (
    <StyledNavList>
      {rooms.map((room) => (
        <p
          key={room.id}
          data-test-id={`room-name-${room.id}`}
          className={room.id === roomId ? "selected-room" : ""}
          onClick={() => updateRoom(room.id)}
        >
          {room.name}
        </p>
      ))}
    </StyledNavList>
  );
};

export default NavList;
