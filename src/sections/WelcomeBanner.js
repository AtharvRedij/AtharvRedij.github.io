import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Hello } from "../svg/hello.svg";

const WelcomeBanner = () => {
  return (
    <Row className="p-3 mt-3">
      <Col lg={6}>
        <Hello className="welcome-banner-img" />
      </Col>
      <Col className="mt-5" lg={6}>
        <h2>
          Hello, I am <strong>Atharv Redij</strong>
        </h2>
        <p className="ml-auto w-fc">A software developer</p>
      </Col>
    </Row>
  );
};

export default WelcomeBanner;
