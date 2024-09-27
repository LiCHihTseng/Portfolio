import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import { useScroll, useTransform, motion} from "framer-motion";

export const Content = () => {
  const targetRef = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0]);
  const scale =  useTransform(scrollYProgress, [0, 0.5], [1,0.8]);


  return (
    <motion.section style = {{opacity}} ref={targetRef}>
        
      <div>Content</div>
    </motion.section>
  );
};
