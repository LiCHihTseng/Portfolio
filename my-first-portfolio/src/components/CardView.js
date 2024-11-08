import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import headerImg from "../assets/img/header-img.svg";

// import "animate.css";
import TrackVisibility from "react-on-screen";
import { useScroll, useTransform, motion } from "framer-motion";

const variants = {
  initial:{
    x:-500,
    y: 100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
    
}


export const CardView = ({}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // Can be adjusted according to requirements.
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <Container>

        <motion.h1 variants={variants} initial="initial" whileInView="animate">My Project</motion.h1>

      <motion.div
        ref={ref}

        variants={variants} initial="initial" whileInView="animate"
      >

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


      </motion.div>
    </Container>
  );
};
