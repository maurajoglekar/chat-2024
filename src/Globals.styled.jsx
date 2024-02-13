import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

html{
    font-family: "Share Tech Mono", monospace;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white};
    font-size: 12px;
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    transition: all 250ms ease-in-out;

     &:hover{
        color: ${({ theme }) => theme.colors.orange};
     }
}

ul{
    list-style: none;
}

h1 {
    color: ${({ theme }) => theme.colors.purple};
}

hr{
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.orange} 0%,
        ${({ theme }) => theme.colors.purple} 100%
    );
    border:0;
    height: 1px
}

/* Custom ScrollBar */

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background: #7a8ba9;
}
::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover{
    background: #202e46;
}

div.grid-container {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 10% 90%;
}

header, main {
  grid-column: span 10;
}
`;
