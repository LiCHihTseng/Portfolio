import React from "react";
import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring } from "framer-motion";

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
  {
    id: 4,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Single = ({ item }) => {
  return <section className="h-screen snap-center">{item.title}</section>;
};

export const Project = () => {
  const testref = useRef();
  const scrollYProgress = useScroll({
    target: testref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div className="project" ref={testref}>
      {/* Progress section with sticky positioning */}
      <div className="progressContainer">
        <h1>Featured Works</h1>
        {/* Motion div for animated progress bar */}
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>

      {/* Map over items to display each project */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
