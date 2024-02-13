import styled from "styled-components";
import { useState } from "react";

const StyledNavHeading = styled.div`
  p.name {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    height: 10px;
  }

  p.elapsed {
    font-size: 12px;
    height: 14px;
    margin-bottom: 40px;
    margin-top: 16px;
    padding-top: 15px;
  }
`;

const NavHeading = ({ startTime, userName }) => {
  const [elapsedMins, setElapsedMins] = useState(0);

  function calculateElapsedMins() {
    const endTime = new Date();
    const timeDiff = endTime - startTime;
    const newMins = Math.floor(timeDiff / 60000);
    setElapsedMins(newMins);
  }

  setInterval(calculateElapsedMins, 60000);
  return (
    <StyledNavHeading>
      <p className="name" data-test-id="user-name">
        {userName}
      </p>
      <p className="elapsed" data-test-id="elapsed-time">
        Online for {elapsedMins} minutes
      </p>
    </StyledNavHeading>
  );
};

export default NavHeading;
