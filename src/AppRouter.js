import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
// import ChatConsole from "./container/ChatConsole";
// import Login from "./views/LoginForm";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route exact component={Login} path="/" />
      <Route component={ChatConsole} path="/chat/:userName" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
