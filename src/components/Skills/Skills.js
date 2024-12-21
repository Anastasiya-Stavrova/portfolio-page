import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import colorSharp from "../../assets/img/color-sharp.png";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <h2>My Soft Skills</h2>
              <p>
                Soft skills are very important for every developer, so I try
                very hard to improve them.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="card">
                  <img src={meter1} alt="skill-img" />
                  <h5>Selforganisation</h5>
                </div>
                <div className="card">
                  <img src={meter2} alt="skill-img" />
                  <h5>Communication</h5>
                </div>
                <div className="card">
                  <img src={meter3} alt="skill-img" />
                  <h5>Adaptive</h5>
                </div>
                <div className="card">
                  <img src={meter2} alt="skill-img" />
                  <h5>Leadership</h5>
                </div>
                <div className="card">
                  <img src={meter1} alt="skill-img" />
                  <h5>Accountability</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="bg-img-left" src={colorSharp} alt="bg-image" />
    </section>
  );
};

export default Skills;
