import React from 'react'
import {motion} from 'framer-motion';
import Banner from '../assets/img/yoUQest-banner.svg';


const textVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

const items = [
    {
        id: 2,
        title: "youUQest - Your ultimate tool to beat burnout",
        img: "https://picsum.photos/400",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
]

const YoUQuest = () => {
  return (
    <motion.div
      className="container mx-auto projectContainer mt-10 overflow-visible static"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={textVariants}>
        {items[0].title}
      </motion.h1>
      <div className="mt-10 flex justify-center">
        <img
          src={Banner}
          alt="yoUQest banner"
          className="w-1/2 h-1/3 object-fit"
          
        />
      </div>
    </motion.div>
  )
}

export default YoUQuest