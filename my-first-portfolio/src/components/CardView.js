import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import headerImg from "../assets/img/header-img.svg";

// import "animate.css";
import TrackVisibility from "react-on-screen";
import "./CardView.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const items = [
  {
    id: 1,
    title: "Project Name",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Project Name2",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);

  // Using useScroll hook to track scroll progress for each section
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Mapping scrollYProgress to the Y-axis transform for smooth animation
  // const yaxis = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      className="m-5 d-flex cardContainer"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >

        <div className="textContainer">
          <h1>Card Title</h1>
          <p>This is some text within a card body.</p>
        </div>
        <div className="imgContainer">
          <img src="https://picsum.photos/400" alt="" />
        </div>

    </motion.div>
  );
};
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
      <motion.h1 variants={variants} initial="initial" whileInView="animate">
        My Project
      </motion.h1>

      <div>
        <div className="justify-content-md-center m-5">
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
