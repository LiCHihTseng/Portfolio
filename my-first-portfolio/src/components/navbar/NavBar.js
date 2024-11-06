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
    <Container>
            <Sidebar/>
      <Row className="navbar">
        <Col md="auto" className="wrapper">
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Col>
        <Col xs lg="2" className="m-5 d-flex" style={{ gap: '20px' }}>
          <a href="#" className="social">
            <img src={navIcon1} alt="" />
          </a>
          <a href="#" className="social">
            <img src={navIcon2} alt="" />
          </a>
          <a href="#" className="social">
            <img src={navIcon3} alt="" />
          </a>
        </Col>
      </Row>
    </Container>



    // <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    //   <Container>
    //     <Navbar.Brand href="/" className="">
    //       <motion.img
    //         src={logo}
    //         alt="Logo"
    //         initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 1 }}
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav">
    //       <span className="navbar-toggler-icon"></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link
    //           href="#home"
    //           className={
    //             activeLink === "home" ? "active navbar-link" : "navbar-link"
    //           }
    //           onClick={() => onUpdateActiveLink("home")}
    //         >
    //           Home
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#skills"
    //           className={
    //             activeLink === "skills" ? "active navbar-link" : "navbar-link"
    //           }
    //           onClick={() => onUpdateActiveLink("skills")}
    //         >
    //           Skills
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#projects"
    //           className={
    //             activeLink === "projects" ? "active navbar-link" : "navbar-link"
    //           }
    //           onClick={() => onUpdateActiveLink("projects")}
    //         >
    //           Projects
    //         </Nav.Link>
    //       </Nav>
    //       <span className="navbar-text">
    //         <div className="social-icon">
    //           <a href="#">
    //             <img src={navIcon1} alt="" />
    //           </a>
    //           <a href="#">
    //             <img src={navIcon2} alt="" />
    //           </a>
    //           <a href="#">
    //             <img src={navIcon3} alt="" />
    //           </a>
    //         </div>
    //       </span>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
