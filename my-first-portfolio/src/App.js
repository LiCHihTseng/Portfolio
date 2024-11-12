import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import { NavBar } from "./components/navbar/NavBar";
import ProjectDetail from "./page/ProjectDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./page/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} /> {/* Updated path */}
      </Routes>
    </>
  );
}

export default App;
