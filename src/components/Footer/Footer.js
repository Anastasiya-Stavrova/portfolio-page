import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import Newsletter from "../Newsletter/Newsletter.js";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col sm={12} className="text-center text-sm-end">
            <div className="social-icons">
              <a
                target="_blank"
                href="https://vk.com/an_stavrova"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="vk" />
              </a>
              <a target="_blank" href="https://t.me/an_stavr" rel="noreferrer">
                <img src={navIcon2} alt="telegram" />
              </a>
              <a
                target="_blank"
                href="https://github.com/Anastasiya-Stavrova"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="github" />
              </a>
            </div>
            <p>&#169; 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
