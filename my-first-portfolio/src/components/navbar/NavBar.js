import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Jason.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { motion } from "framer-motion";
import "./NavBar.scss";
import Sidebar from "../sidebar/Sidebar";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Container className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="social" >
          <motion.a href="https://www.linkedin.com/in/li-chih-tseng-22933319a/c" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}} className="no-underline text-white">
          <p>LINKEDLN</p>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/li-chih-tseng-22933319a/c" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}} className="no-underline text-white">
            <p>INSTAGRAM</p>
          </motion.a>
          <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}} className="no-underline text-white">
          <p>MY CV</p>
          </motion.a>
        </div>
      </div>
    </Container>

  );
};
