import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import { useScroll, useTransform, motion } from "framer-motion";

export const Banner = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["25% start", "end start"], // Can be adjusted according to requirements.
  });

  const bannerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 文字動畫邏輯
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["[Current Student]", "[Web Designer]", "[UI/UX Designer]"];
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
    <motion.div style={{ opacity: bannerOpacity }} ref={targetRef}>
      <section
        className="banner"
        id="home"
      >
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={12} xl={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Jason`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "[Current Student]", "[Web Designer]", "[UI/UX Designer]" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
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
