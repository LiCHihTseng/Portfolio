import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import headerImg from "../assets/img/header-img.svg";

// import "animate.css";
import TrackVisibility from "react-on-screen";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Card.css"; // Import CSS for Card component

export const CardView = ({ children, imgSrc, ...props }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll(); 

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <Container>
      {/* Apply opacity and scale directly to this section */}
      <motion.section style={{ opacity }} ref={targetRef}>
        <div className="m-10">
          {/* 使用 scale 動畫 */}
          <h2>Projects</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <Row className="justify-content-md-center m-5">
          <Col>
            <Card className="m-5">
              <Card.Body>
                <h1>Card Title</h1>
                <p>This is some text within a card body.</p>
                <img src="https://picsum.photos/200" alt="" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center m-5">
          <Col>
            <Card className="m-5">
              <Card.Body>
                <h1>Card Title</h1>
                <p>This is some text within a card body.</p>
                <img src="https://picsum.photos/200" alt="" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.section>
    </Container>
  );
};
