import React from "react";
import { motion } from "framer-motion";
import "./Slider.scss";

const Slider = ({ keywords = [] }) => {
  return (
    <div className="container mx-auto overflow-visible ">
      <div className="flex gradient_img">
        <motion.div
          className="flex flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {keywords.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slider image ${index + 1}`}
              className="m-5 p-4 h-auto w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] inline-block flex items-center justify-center text-center imgContainer"
            />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {keywords.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slider image ${index + 1}`}
              className="m-5 p-4 h-auto w-full max-w-sm md:max-w-md lg:max-w-lg inline-block flex items-center justify-center text-center imgContainer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
