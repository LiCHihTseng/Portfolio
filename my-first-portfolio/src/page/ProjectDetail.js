import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import transition from "../transition";
import { motion } from "framer-motion";
import Insync from "../assets/img/InSync-banner.svg";
import './ProjectDetail.scss';

import Marquee from "../components/marquee/Marquee"; // Fix the casing of the file name//+


// Mock data, should be imported or retrieved from a context/store in a real app
const items = [
  {
    id: 1,
    title: "InSync: The Digital Picture Frame",
    img: Insync,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    keywords:   [
      "Mobile App",
      "Ambient Project",
      "Digital Photo Frame",
      "Schedule Management",
      "User Experience",
    ],
    project_sum: "I contributed to expanding InSync’s functionality as an ambient product for family engagement and scheduling by designing the user interface for both the mobile app and digital frame. Working with the team, I introduced responsive features like motion detection and personalized status lights, creating an intuitive, hands-free interaction experience.\n\nTo enhance usability, I integrated navigation elements and visual cues, helping users easily manage schedules, view updates, and share stories within the family circle. These enhancements transformed InSync into a meaningful family hub, fostering better communication and helping users feel more connected to each other’s daily lives.",
    project_highlights: [
      "Added motion detection and personalized status lights",
      "Introduced responsive features for mobile app and digital frame",
      "Integrated navigation elements and visual cues",
      "Enhanced usability by creating intuitive, hands-free interaction experience"],
    viedo_link: "https://youtu.be/y29mrG8imNg",
    my_role: "As the Lead UI Designer for InSync, I focused on creating intuitive interfaces for both the mobile app and digital photo frame, collaborating closely with our backend developer, mobile developer, and hardware specialist to integrate key features like motion detection, personalized status lights, and an ambient scheduling display. My primary responsibility was to align design with user needs, ensuring usability across platforms.\n\n In addition to leading the UI design process, I conducted iterative testing to refine the user experience. Delayed feedback required multiple design adjustments, enhancing our product’s relevance to family communication needs but adding pressure to our timeline. I also supported React Native development, gaining valuable coding experience and contributing to a foundation of user-centered, ambient interaction that makes InSync a meaningful tool for family connectivity."

  },
  {
    id: 2,
    title: "Project Name2",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

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



const ProjectDetail = () => {
  const location = useLocation();
  const { id } = useParams(); // Access the id from the URL
  const { item } = location.state || {}; // Get item data from location state

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, [location]);

  // Helper function to find the item by ID if location.state is not available
  const getItemById = (id) => {
    return items.find((item) => item.id === parseInt(id));
  };

  // Use either location.state data or find the item by ID
  const projectItem = item || getItemById(id);

  if (!projectItem) return <div>No data available for project {id}.</div>;

  return (
    <div
      className="container mx-auto projectContainer mt-10"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={textVariants} initial="initial" animate="animate">
        {projectItem.title}
      </motion.h1>
      <div className="mt-10" style={{ height: "514px", overflow: "hidden" }}>
        {" "}
        {/* Added overflow */}
        <img
          src={projectItem.img}
          alt={projectItem.title}
          className="w-full h-full object-fit rounded-lg" // Adjusted class names
        />
      </div>
      
      <Marquee keywords={projectItem.keywords} /> 

      <div className="grid grid-cols-2 m-5 ">
        <h5>Project Summary</h5>
        <div>
          {projectItem.project_sum.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-des">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 m-5 ">
        <h5>Problem Statement</h5>
        <p className="text-des">{projectItem.desc}</p>
      </div>

      <div className="grid grid-cols-2 m-5">
        <h5>Users And Need</h5>
        <p className="text-des">{projectItem.desc}</p>
      </div>

      <div className="grid grid-cols-2 m-5 ">
        <h5>My Role</h5>
        <div>
          {projectItem.my_role.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-des">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
