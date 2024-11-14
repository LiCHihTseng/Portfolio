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
    title: "Project Name2",
    img: "https://picsum.photos/400",
    platform: "website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    platform: "website",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
      className="m-5 d-flex cardContainer"
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
      <div className="imgContainer">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="d-flex flex-col space-between gap-10">
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

    // <motion.div className="w-[600[x] h-auto card-bg rounded-3xl shadow-md gap-10" onClick={handleClick} ref={ref} variants={variants} initial="initial" whileInView="animate">
    //   <div className="grid grid-cols-2 gap-10">
    //     <div className="w-full h-full">
    //       <img className="w-full h-full aspect-square object-cover object center rounded 3-xl" src={item.img} alt={item.title}/>
    //     </div>
    //     <div className="flex flex-col">
    //       <div className="flex flex-col gap-5">
    //         <h2 className="text-3xl font-bold">{item.title}</h2>
    //         <p className="text-sm font-normal">{item.desc}</p>
    //       </div>

    //     </div>
    //   </div>
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
