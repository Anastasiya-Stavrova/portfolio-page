import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./Banner.css";
import headerImg from "../../assets/img/header-img.svg";

const Banner = () => {
  const toRotate = [
    "JavaScript",
    "CSS",
    "Html",
    "Bootstrap",
    "TypeScript",
    "React",
  ];
  const period = 2000;

  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
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
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(400);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="align-items-center">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!</span>
            <h1>
              {"Hi! I'm Anastasiya Stavrova a beginner frontend developer. "}
            </h1>
            <h2>
              <span className="wrap">My technology stacks: {text}</span>
            </h2>
            <p>
              At the moment I'm studying at the second year of Tomsk State
              University, Faculty of Higher IT School.
            </p>
            <button onClick={() => console.log("Click")}>
              Let's Connect! <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
