import { useRef } from "react";
import "./project.scss";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

const variants = {
  initial: {
    // x:-500,
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

const Single = ({ item }) => {
  const ref = useRef(null);

  // Using useScroll hook to track scroll progress for each section
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Mapping scrollYProgress to the Y-axis transform for smooth animation
  // const yaxis = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Project = () => {
  const ref = useRef(null);

  // Using useScroll hook to track overall scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    // Adjust this to control when the scroll progress triggers
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  // Mapping scrollYProgress to scaleX for the progress bar animation
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="project" ref={ref}>
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
