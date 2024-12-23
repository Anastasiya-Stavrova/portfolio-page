import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setStatus("sending");

    let response = await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      clearFields();
    }

    const data = await response.json();
    console.log(data);
    setMessage(data.message);
    setStatus(data.status);
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-box">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={submitHandler}>
              <div className="new-email-box">
                <input
                  value={email}
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
