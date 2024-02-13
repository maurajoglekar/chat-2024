import styled from "styled-components";
import { useState } from "react";
import NavHeading from "./NavHeading";
import NavList from "./NavList";

const StyledNav = styled.nav`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.green};
  min-width: 200px;

  /* common styling for all paragraph's in nav, both in heading and list */
  div p {
    color: ${({ theme }) => theme.colors.white};
    padding-left: 25px;
    padding-top: 25px;
    margin: 0;
  }
`;
const Nav = ({ roomId, rooms, updateRoom, userName }) => {
  const [startTime, setStartTime] = useState(new Date());

  return (
    <StyledNav>
      <NavHeading startTime={startTime} userName={userName} />
      <NavList roomId={roomId} rooms={rooms} updateRoom={updateRoom} />
    </StyledNav>
  );
};

export default Nav;
