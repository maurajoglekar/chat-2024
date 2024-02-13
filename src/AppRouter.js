import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Globals.styled";
import LoginForm from "./components/chat/LoginForm";
import ChatConsole from "./components/chat/ChatConsole";

function AppRouter() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255,1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "#2D5987",
      green: "rgba(0, 206, 158,1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51,153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div class="grid-container">
          <main>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/chat/:userName" element={<ChatConsole />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
