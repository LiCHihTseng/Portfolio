import React from "react";
import { motion } from "framer-motion";
import './Marquee.scss';

const Marquee = ({ keywords = [] }) => {
    return (
      <div className="container mx-auto">
        <div className="flex gradient">
          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {keywords.map((text, index) => (
              <div key={index} className="m-5 p-4 h-10 inline-block rounded-lg flex items-center justify-center text-center marqueeContainer">
                {text}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {keywords.map((text, index) => (
              <div key={index} className=" m-5 p-4 h-10 inline-block rounded-lg flex items-center justify-center text-center marqueeContainer">
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Marquee;