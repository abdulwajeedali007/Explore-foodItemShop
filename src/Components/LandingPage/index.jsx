import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Landing.scss";
import landingImage from "../../Images/pizzahome.png";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
function index() {
  return (
    <div className="landing__container">
      <Container>
        <Row>
          <Col sm={6}>
            <h2>
              Good food & <br /> Great vibes
            </h2>
            <p>The only thing we're serious about is food.</p>
            <Link to="/items">
              <button className="btnPrimary">Order Now</button>
            </Link>
            <div className="social__icons">
              <Link to="/">
                <FiFacebook />
              </Link>
              <Link to="/">
                <FiInstagram />
              </Link>
              <Link to="/">
                <FiTwitter />
              </Link>
              <Link to="/">
                <FiYoutube />
              </Link>
            </div>
          </Col>
          <Col sm={6}>
            <div className="image__container">
              <img src={landingImage} alt="pizzahome" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="downArrow">
        <BsArrowDown />
      </div>
    </div>
  );
}

export default index;
