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

import { useNavigate } from "react-router-dom";

import Insync from "../assets/img/InSync-logo.png";
import yoUQuest from "../assets/img/yoUQuest.png";
import AussieWild from "../assets/img/AussieWildlife.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

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
    title: "InSync",
    img: Insync,
    platform: ["Mobile App", "Physical Products"],

    desc: "An ambient home interface for effortless family coordination, InSync blends seamlessly into daily life to support family schedules and social engagement.",
  },
  {
    id: 2,
    title: "yoUQuest",
    img: yoUQuest,
    platform: ["Website","ReactJS", ],
    desc: "yoUQuest is a gamified task management platform that helps university students combat academic burnout through progress tracking, customizable goals, and break reminders, promoting balance and productivity.",
  },
  {
    id: 3,
    title: "Aussie Wildlife",
    img: AussieWild,
    platform: ["Website", "JavaScript"],
    desc: "Aussie Wildlife is an interactive educational platform that uses game-based learning to inspire curiosity and appreciation for Australia's unique biodiversity through immersive RPG-style exploration.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${item.id}`, { state: item }); // Pass item data as state
  };

  // Mapping scrollYProgress to the Y-axis transform for smooth animation
  // const yaxis = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      className="m-5 grid xl:grid-cols-2 lg:grid-cols-1 cardContainer hover:cursor-pointer"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.8 }, // Fixed syntax here
      }}
      transition={{ duration: 0.5 }}

      onClick={handleClick}
    >
      
      <div className="col-span-1 w-full h-full ">
        <img src={item.img} alt={item.title} className="w-full h-full rounded-lg"/>
      </div>
      <div className="d-flex flex-col space-between gap-10 ">
        <div className="textContainer">
          {/* Container for multiple platform tags */}

          <div className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(item.platform) ? (
              item.platform.map((platform, index) => (
                <p
                  key={index}
                  className="inline-block rounded-3xl py-2 px-4 border-solid border-2 border-color"
                >
                  {platform}
                </p>
              ))
            ) : (
              <p className="inline-block rounded-3xl py-2 px-4 border-solid border-2 border-color">
                {item.platform}
              </p>
            )}
          </div>
          <h1 className="mt-2">{item.title}</h1>
          <p style={{color: "#BBBBBB"}}>{item.desc}</p>
        </div>
        <motion.div className="flex justify-end p-5 gap-4 items-center"   initial={{
            y: 0,
          }}
          animate={{
            y: [0, 10, 0, 10, 0],
          }}
          transition={{
            duration: 2, // Adjust duration as needed for smoothness
            ease: "easeInOut", // Smooth easing
            repeat: Infinity,
            repeatDelay: 1.5,
          }}>
        <motion.p
          className="text-right inline-block align-center mb-0 text-lg"
        >
          See More
         
        </motion.p>
        <FontAwesomeIcon icon={faArrowRight} />
        </motion.div>

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
      <motion.h1 variants={variants} initial="initial" whileInView="animate" viewport={{once:true}}>
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
