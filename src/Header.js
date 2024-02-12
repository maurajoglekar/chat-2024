import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightNavyBlue};

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    height: 80px;
  }

  li {
    padding: 10px 20px;
  }

  li > a {
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/catalog-viewer">Catalog Viewer</Link>
          </li>
          <li>
            <Link to="/kanban">Kanban Booard</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
