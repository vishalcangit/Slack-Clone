import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
