import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path="/" exact element={<Header />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
