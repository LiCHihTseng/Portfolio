import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import { useScroll, useTransform, motion } from "framer-motion";

import './Banner.scss';


const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      delay: 1,
      staggerChildren:0.1,
    }
  },
    
}

// const sliderVariants = {
//   initial:{
//     x:0,
//   },
//   animate:{
//     x:"220%",
//     transition:{
//       repeat:Infinity,
//       duration:20,
//     }
//   },
    
// }
export const Banner = () => {
  const targetRef = useRef(null);




  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Current Student", "Web Designer", "UI/UX Designer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

 

  return (
    <motion.div  variants={textVariants} initial="initial" animate="animate">
      <section
        className="banner"
        id="home"
      >
        <Container className="banner">
          <Row className="align-items-center">
            <Col lg={10} md={10} sm={10}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Jason Tseng`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="500"
                        data-rotate='[ "Current Student", "Web Developer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Currently studying on Univiersity of Queensland, Master of Interaction Design student
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>

          <Row >
            <Col md="auto">
              <button onClick={() => console.log("connect")}>
                Contact me! <ArrowRightCircle size={25} />
              </button>
            </Col>
          </Row>

          {/* content */}
        </Container>
      </section>
    </motion.div>
  );
};
