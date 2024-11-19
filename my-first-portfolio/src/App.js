  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import "./app.scss";
  import { NavBar } from "./components/navbar/NavBar";
  import ProjectDetail from "./page/ProjectDetail";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Home from "./page/Home";
  import Footer from "./components/footer/Footer";
  import { AnimatePresence } from "framer-motion";

  // Import the necessary components and libraries

  function App() {
    return (
      <>
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer/>
      </>
    );
  }

  export default App;
