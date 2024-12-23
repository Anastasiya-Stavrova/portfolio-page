import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import formInitialDetails from "../../consts/formInitialDetails";
import PhoneFormater from "../../utils/PhoneFormater";
import "./Contacts.css";
import contactImg from "../../assets/img/contact-img.svg";

const Contacts = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setStatus({});
    setButtonText("Sending...");

    if (formDetails.phone === "+7 (") {
      formDetails.phone = "";
    }

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    setFormDetails({ ...formDetails, message: "" });

    if (response.ok) {
      setStatus({ success: true, message: "Message sent successfully!" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contacts" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact-img" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={submitHandler}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    required
                    title="Fill in this field"
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    title="Fill in this field"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    pattern=".{18}|.{4}"
                    title="Enter your full phone number.
                    If you want to skip this field,
                    leave it as «+7 (»"
                    onInput={(e) =>
                      onFormUpdate(
                        "phone",
                        PhoneFormater.setPhoneNumber(e.target.value)
                      )
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    required
                    title="Fill in this field"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  {status.message && (
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  )}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
