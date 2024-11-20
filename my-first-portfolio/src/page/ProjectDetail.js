import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import transition from "../transition";
import { motion } from "framer-motion";

import "./ProjectDetail.scss";

import Marquee from "../components/marquee/Marquee"; // Fix the casing of the file name//+
import Slider from "../components/slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircle,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Roles } from "./Roles";

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

// import Insync from "../assets/img/InSync-banner.svg";
import Insync_photoframe from "../assets/img/InSync-photoframe.svg";
import InSync_photo from "../assets/img/InSync-Photo.svg";
import SliderImage1 from "../assets/img/InSync-Slider1.svg";
import SliderImage2 from "../assets/img/InSync-Slider2.svg";
import SliderImage3 from "../assets/img/InSync-Slider3.svg";
import Lottie from "react-lottie";
import InsyncAnimation from "../assets/img/GIF/InSync";
import InsyncAnimation2 from "../assets/img/GIF/icon-park_brain";
import InsyncAnimation3 from "../assets/img/GIF/icon-park_user_test";
import InsyncPictureFrame1 from "../assets/img/GIF/InSync-PhotoFrame";
import InsyncPictureFrame2 from "../assets/img/GIF/InSync-Short2";
import InsyncAnimation_motion_sensor from "../assets/img/GIF/Motion-sensor";
import InsyncAnimation_family_note from "../assets/img/GIF/Family_note";
import InsyncAnimation_schedule from "../assets/img/GIF/Schedule";

import YoUQuestBanner from "../assets/img/GIF/yoUQuest_banner";

// Mock data, should be imported or retrieved from a context/store in a real app
const items = [
  {
    id: 1,
    project_category: "Side Projects",
    title: "InSync: The Digital Picture Frame",
    img: InsyncAnimation,
    img_2: Insync_photoframe,

    slider_img: [SliderImage1, SliderImage2, SliderImage3],
    keywords: [
      "Mobile App",
      "Ambient Project",
      "Digital Photo Frame",
      "Schedule Management",
      "User Experience",
    ],
    project_sum:
      "I contributed to expanding InSync’s functionality as an ambient product for family engagement and scheduling by designing the user interface for both the mobile app and digital frame. Working with the team, I introduced responsive features like motion detection and personalized status lights, creating an intuitive, hands-free interaction experience.\n\nTo enhance usability, I integrated navigation elements and visual cues, helping users easily manage schedules, view updates, and share stories within the family circle. These enhancements transformed InSync into a meaningful family hub, fostering better communication and helping users feel more connected to each other’s daily lives.",
    project_highlights: [
      {
        key: "Motion sensors and Interactive Video Playback",
        img: InsyncAnimation_motion_sensor,
        description:
          "Motion sensors detect when a user approaches the photo frame, triggering the display of an interactive video. Users can also customize status lights via the mobile app, choosing colors to reflect different moods or states, or use the auto-status feature to display their availability, such as busy, occupied, or relaxing, on the photo frame.",
      },
      {
        key: "Posting Family Notes",
        img: InsyncAnimation_family_note,
        description:
          "Enhancing family communication, this feature allows users to post notes on the digital photo frame. Notes can be used for reminders, messages, or small thoughtful gestures, fostering a deeper connection among family members.",
      },
      {
        key: "Scheduling System Feedback",
        img: InsyncAnimation_schedule,
        description:
          "An intuitive schedule display helps families stay on top of daily plans. Integrated with existing calendars, the system ensures effortless updates, keeping every member informed and organized.",
      },
    ],
    video_link: "https://youtu.be/y29mrG8imNg",
    problem_statements:
      "Traditional time management apps, often confined to mobile devices, can be both a boon and a bane for family coordination. While they synchronize schedules and organize tasks, they frequently demand constant attention, leading to distractions and fragmented focus. This constant connectivity can isolate family members, prioritizing efficiency over a harmonious family experience. There is a need for a solution that encourages social interaction and collaboration without the intrusive nature of current mobile applications, by integrating technology more subtly and naturally into the home environment.",
    user_need:
      "The main users of InSync are families seeking a convenient, shared platform for staying connected and informed about each other's schedules, events, and daily moments. This includes both tech-savvy members and those less familiar with technology, such as older adults who may appreciate easy-to-access family updates without needing to use a smartphone or computer.    ",
    my_role:
      "As the Lead UI Designer for InSync, I focused on creating intuitive interfaces for both the mobile app and digital photo frame, collaborating closely with our backend developer, mobile developer, and hardware specialist to integrate key features like motion detection, personalized status lights, and an ambient scheduling display. My primary responsibility was to align design with user needs, ensuring usability across platforms.\n\n In addition to leading the UI design process, I conducted iterative testing to refine the user experience. Delayed feedback required multiple design adjustments, enhancing our product’s relevance to family communication needs but adding pressure to our timeline. I also supported React Native development, gaining valuable coding experience and contributing to a foundation of user-centered, ambient interaction that makes InSync a meaningful tool for family connectivity.",
    initial_user_test:
      "Our initial concept for the InSync digital picture frame focused solely on uploading and displaying photos. However, after conducting initial user testing, we received valuable feedback that prompted us to rethink the functionality. Users expressed interest in expanding the content beyond photos, specifically requesting the ability to upload videos, similar to how Instagram Stories or BeReal work. \n\nOne suggestion was to enhance family interaction by displaying videos when a user approaches the picture frame. This feedback highlighted the potential for a more dynamic, engaging experience, where videos could be shown as a form of family interaction. This idea was well-received and inspired us to consider how multimedia content could be integrated to make the frame a more interactive and social experience.",
    user_test_title: "Think Aloud Methodology",
    user_test_desc:
      "We conducted Think Aloud testing to evaluate how users interacted with InSync’s photo frame and mobile app. Users were asked to vocalize their thoughts while performing predefined tasks, providing insight into their understanding and behavior.",
    key_findings: [
      "Initial Confusion: Users often hesitated with features like the looping GIF and motion sensors. This uncertainty required some exploration before they understood how to interact with buttons and navigation.",
      "Positive Reception: Despite initial challenges, users appreciated features like posting notes for family members, recognizing it as a valuable tool for communication.",
      "Scheduling System: The scheduling display was seen as useful and intuitive, though users struggled to understand the purpose of the light indicator, speculating incorrectly about its function.",
      "Aesthetic Feedback: Visible wires on the frame distracted users, suggesting a need for more polished hardware design.",
    ],
    user_img: InsyncAnimation2,
    use_img2: InsyncAnimation3,
    short_img1: InsyncPictureFrame1,
    short_img2: InsyncPictureFrame2,
    conclusion:
      "Working on the InSync project was a transformative journey that challenged me to design interfaces that seamlessly blend technology with daily life. As the lead UI designer, I focused on creating an ambient and intuitive system that fostered family engagement through features like motion detection and personalized status lights. Balancing user feedback, hardware constraints, and development timelines required innovative problem-solving and adaptability, but the positive reception validated our efforts. This experience honed my technical and design skills while deepening my appreciation for user-centered, responsive solutions, inspiring me to continue crafting meaningful technologies that enhance everyday experiences.",
  },
  {
    id: 2,
    project_category: "Side Projects",
    title: "yoUQuest - Your ultimate tool to beat burnout",
    img: YoUQuestBanner,
    img_2: Insync_photoframe,

    slider_img: [SliderImage1, SliderImage2, SliderImage3],
    keywords: [
      "Website",
      "Task Management",
      "User Experience",
      "Unique Features",
      "Preventing Burnout",
    ],
    project_sum:
      "yoUQuest is a platform dedicated to empowering students at the University of Queensland by addressing the challenges of academic burnout. \n\nBefore yoUQuest, managing assignments and tasks was a fragmented, stressful process for students, often leading to poor time management and feelings of overwhelm. Staying motivated through demanding academic schedules while maintaining personal well-being was a daunting challenge. \n\nWith yoUQuest, we’ve revolutionized how students organize and complete their academic tasks. By simply searching for their course, students gain access to a personalized assignment setup based on UQ’s course data. The platform allows them to break down assignments into smaller tasks, track their progress using an innovative battle pass system, and visually experience the satisfaction of “climbing a mountain” as they complete their work. A built-in timer ensures students maintain healthy work habits by recommending breaks, supporting better focus, and preventing burnout.\n\nWhat makes yoUQuest stand out is its focus on holistic student well-being. The platform not only simplifies academic management but also encourages a balanced approach to study by integrating gamified progress tracking with practical burnout prevention strategies. With yoUQuest, students can stay on top of their workload, feel accomplished, and thrive academically without compromising their mental health.",
    project_highlights: [
      {
        key: "Motion sensors and Interactive Video Playback",
        img: InsyncAnimation_motion_sensor,
        description:
          "Motion sensors detect when a user approaches the photo frame, triggering the display of an interactive video. Users can also customize status lights via the mobile app, choosing colors to reflect different moods or states, or use the auto-status feature to display their availability, such as busy, occupied, or relaxing, on the photo frame.",
      },
      {
        key: "Posting Family Notes",
        img: InsyncAnimation_family_note,
        description:
          "Enhancing family communication, this feature allows users to post notes on the digital photo frame. Notes can be used for reminders, messages, or small thoughtful gestures, fostering a deeper connection among family members.",
      },
      {
        key: "Scheduling System Feedback",
        img: InsyncAnimation_schedule,
        description:
          "An intuitive schedule display helps families stay on top of daily plans. Integrated with existing calendars, the system ensures effortless updates, keeping every member informed and organized.",
      },
    ],
    video_link: "https://youtu.be/y29mrG8imNg",
    problem_statements:
      "Traditional time management apps, often confined to mobile devices, can be both a boon and a bane for family coordination. While they synchronize schedules and organize tasks, they frequently demand constant attention, leading to distractions and fragmented focus. This constant connectivity can isolate family members, prioritizing efficiency over a harmonious family experience. There is a need for a solution that encourages social interaction and collaboration without the intrusive nature of current mobile applications, by integrating technology more subtly and naturally into the home environment.",
    user_need:
      "The main users of InSync are families seeking a convenient, shared platform for staying connected and informed about each other's schedules, events, and daily moments. This includes both tech-savvy members and those less familiar with technology, such as older adults who may appreciate easy-to-access family updates without needing to use a smartphone or computer.    ",
    my_role:
      "As the Lead UI Designer for InSync, I focused on creating intuitive interfaces for both the mobile app and digital photo frame, collaborating closely with our backend developer, mobile developer, and hardware specialist to integrate key features like motion detection, personalized status lights, and an ambient scheduling display. My primary responsibility was to align design with user needs, ensuring usability across platforms.\n\n In addition to leading the UI design process, I conducted iterative testing to refine the user experience. Delayed feedback required multiple design adjustments, enhancing our product’s relevance to family communication needs but adding pressure to our timeline. I also supported React Native development, gaining valuable coding experience and contributing to a foundation of user-centered, ambient interaction that makes InSync a meaningful tool for family connectivity.",
    initial_user_test:
      "Our initial concept for the InSync digital picture frame focused solely on uploading and displaying photos. However, after conducting initial user testing, we received valuable feedback that prompted us to rethink the functionality. Users expressed interest in expanding the content beyond photos, specifically requesting the ability to upload videos, similar to how Instagram Stories or BeReal work. \n\nOne suggestion was to enhance family interaction by displaying videos when a user approaches the picture frame. This feedback highlighted the potential for a more dynamic, engaging experience, where videos could be shown as a form of family interaction. This idea was well-received and inspired us to consider how multimedia content could be integrated to make the frame a more interactive and social experience.",
    user_test_title: "Think Aloud Methodology",
    user_test_desc:
      "We conducted Think Aloud testing to evaluate how users interacted with InSync’s photo frame and mobile app. Users were asked to vocalize their thoughts while performing predefined tasks, providing insight into their understanding and behavior.",
    key_findings: [
      "Initial Confusion: Users often hesitated with features like the looping GIF and motion sensors. This uncertainty required some exploration before they understood how to interact with buttons and navigation.",
      "Positive Reception: Despite initial challenges, users appreciated features like posting notes for family members, recognizing it as a valuable tool for communication.",
      "Scheduling System: The scheduling display was seen as useful and intuitive, though users struggled to understand the purpose of the light indicator, speculating incorrectly about its function.",
      "Aesthetic Feedback: Visible wires on the frame distracted users, suggesting a need for more polished hardware design.",
    ],
    user_img: InsyncAnimation2,
    use_img2: InsyncAnimation3,
    short_img1: InsyncPictureFrame1,
    short_img2: InsyncPictureFrame2,
    conclusion:
      "Working on the InSync project was a transformative journey that challenged me to design interfaces that seamlessly blend technology with daily life. As the lead UI designer, I focused on creating an ambient and intuitive system that fostered family engagement through features like motion detection and personalized status lights. Balancing user feedback, hardware constraints, and development timelines required innovative problem-solving and adaptability, but the positive reception validated our efforts. This experience honed my technical and design skills while deepening my appreciation for user-centered, responsive solutions, inspiring me to continue crafting meaningful technologies that enhance everyday experiences.",
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
  const ref = useRef(null);
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projectItem.img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.user_img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.use_img2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.short_img1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.short_img2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const keyfeatureOptions = (img) => ({
    loop: true,
    autoplay: true,
    animationData: img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  //animation for scrolling
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
  const isSVG =
    typeof projectItem.img === "string" && projectItem.img.endsWith(".svg");
  return (
    <div
      className="container mx-auto projectContainer mt-10 overflow-visible static "
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={textVariants} initial="initial" animate="animate">
        {projectItem.title}
      </motion.h1>
      <div className="mt-10 flex justify-center">
        {isSVG ? (
          <img
            src={projectItem.img}
            alt={projectItem.title}
            className="w-1/2 h-1/3 object-fit rounded-md"
          />
        ) : (
          <Lottie
            options={defaultOptions}
            className="w-full h-full object-fit rounded-md"
            style={{ borderRadius: "1.5rem" }}
          />
        )}
      </div>

      <Marquee
        className="absolute bottom-0 left-0 "
        keywords={projectItem.keywords}
      />

      <motion.div
        className="grid xl:grid-cols-4 lg:grid-cols-2 m-5 gap-4"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Filter the roles array to match the current project's ID */}
        {Roles.filter((role) => role.id === parseInt(id)).map((roleData) => (
          <React.Fragment key={roleData.id}>
            {/* MY ROLE Section */}
            <div>
              <h5>{roleData.role}</h5>
              <div className="flex-col mt-4">
                {roleData.role_content.map((content, index) => (
                  <p className="text-des" key={`role-${index}`}>
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* TEAM Section */}
            <div>
              <h5>{roleData.team}</h5>
              <div className="flex-col mt-4">
                {roleData.team_content.map((content, index) => (
                  <p className="text-des" key={`team-${index}`}>
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* YEAR Section */}
            <div>
              <h5>{roleData.year}</h5>
              <div className="flex-col mt-4">
                {roleData.year_content.map((content, index) => (
                  <p className="text-des" key={`year-${index}`}>
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* TOOLS Section */}
            <div>
              <h5>{roleData.title}</h5>
              <div className="flex-col mt-4">
                {roleData.content.map((content, index) => (
                  <p className="text-des" key={`tool-${index}`}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 m-5 md:grid-cols-1"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5>Project Summary</h5>
        <div>
          {projectItem.project_sum.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-des mt-4">
              {paragraph}
            </p>
          ))}
          <div className="flex space-x-4 items-center mt-10">
            <a
              href={projectItem.video_link}
              target="_blank"
              className="hover:cursor-pointer space-x-4 text-white text-2xl"
            >
              View Video
            </a>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </motion.div>

      <div className="flex rounded-lg items-center justify-center">
        <img src={InSync_photo} alt="" className="rounded-lg w-2/3 h-2/3"></img>
      </div>

      <div className="" style={{ height: "10vh" }}></div>

      <div
        className="grid lg:grid-cols-2 m-5 md:grid-cols-1 "
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5>Problem Statement</h5>
        <p className="text-des">{projectItem.problem_statements}</p>
      </div>

      <div className="grid lg:grid-cols-2 m-5 md:grid-cols-1">
        <h5>Users And Need</h5>
        <p className="text-des">{projectItem.user_need}</p>
      </div>

      <div
        className="grid lg:grid-cols-2 m-5 md:grid-cols-1"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5>My Role</h5>
        <div>
          {projectItem.my_role.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-des">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Slider keywords={projectItem.slider_img} />
      </div>

      <div className="" style={{ height: "20vh" }}></div>
      <div>
        <div
          ref={ref}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Key features</h2>
          {projectItem.project_highlights.map((highlight) => (
            <div
              key={highlight.key}
              className="flex flex-column p-4 items-center mt-5"
            >
              <h4 className="font-semibold items-center justify-center text-gray-300">
                {highlight.key}
              </h4>
              <div className="lg:w-1/2 md:w-full">
                <p className="text-des">{highlight.description}</p>{" "}
                {/* Display the description */}
              </div>

              <div className="flex flex-row items-center justify-center mt-8">
                <div className="basis-2/3">
                  <Lottie
                    options={keyfeatureOptions(highlight.img)} // Use the img from the highlight
                    style={{
                      height: "100%",
                      borderRadius: "0.5rem",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="" style={{ height: "20vh" }}></div>

        <div className="mt-8">
          <h2>Feedbck are everywhere</h2>
          <div className="flex flex-wrap mt-5">
            <div className="flex justify-center item-center xl:basis-2/5 xl:order-2 md:basis-1/2">
              <Lottie
                options={defaultOptions2}
                // height={96}
                // width={96}
                className="object-fit"
              />
            </div>

            <div className="xl:basis-3/5 xl:order-1">
              {projectItem.initial_user_test
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="text-des">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="" style={{ height: "20vh" }}></div>

        <div>
          <h2 className="mt-5">User evaluation & User test</h2>
          <p className="text-des">{projectItem.user_test_desc}</p>
          <div className="mt-5 ">
            <div>
              <h3>Key Findings</h3>
              <div className="flex flex-wrap mt-5">
                <div className="flex justify-center xl:basis-2/5 xl:order-2  md:basis-1/2">
                  <Lottie
                    options={defaultOptions3}
                    className="object-cover rounded-lg"
                    style={{ height: "18.75rem", width: "25rem" }}
                  />
                </div>

                {/* List of key findings */}
                <div className="xl:basis-3/5 xl:order-1 md:">
                  <ul style={{ paddingLeft: "20px" }}>
                    {projectItem.key_findings.map((highlight, index) => {
                      // Split the highlight into words
                      const words = highlight.split(" ");
                      // Bold the first two words
                      const boldText = words.slice(0, 2).join(" ");
                      const restText = words.slice(2).join(" ");

                      return (
                        <li
                          key={index}
                          className="flex p-1 items-center text-des"
                        >
                          <FontAwesomeIcon icon={faCircle} className="fa-2xs" />
                          <span className="ml-5">
                            <strong className="text-white">{boldText}</strong>{" "}
                            {restText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ height: "20vh" }}></div>
        <div className="">
          <div className="flex flex-wrap  gap-2">
            <div className="flex-auto w-60 rounded-lg">
              <Lottie
                options={defaultOptions4}
                className="object-cover "
                style={{
                  width: "80%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />
            </div>
            <div className="flex-auto w-60 rounded-lg ">
              <Lottie
                options={defaultOptions5}
                className="object-cover "
                style={{
                  width: "80%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3>Conclusion</h3>
          <p className="text-des">{projectItem.conclusion}</p>
        </div>

        <div className="" style={{ height: "20vh" }}></div>
        <div className="flex justify-end items-end m-5 ">
          <motion.div
            className="rounded-full"
            whileHover={{
              scaleX: 1.1,
              transition: { duration: 0.8 }, // Fixed syntax here
            }}
            style={{ backgroundColor: "#333338" }}
          >
            <div className="flex justify-center items-center p-4 gap-4">
              <a className=" text-3xl text-white">Next Project</a>
              <FontAwesomeIcon icon={faArrowCircleRight} className="fa-2x" />
            </div>
          </motion.div>
        </div>

        <div className="" style={{ height: "60vh" }}></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
