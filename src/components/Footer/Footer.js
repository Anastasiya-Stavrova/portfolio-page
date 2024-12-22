import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm/MailchimpForm.js";
import logo from "../../assets/img/web.svg";
import "./Footer.css";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={12} className="text-center text-sm-end">
            <div className="social-icons">
              <a href="#">
                <img src={navIcon1} alt="vk" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="telegram" />
              </a>
              <a href="#">
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
