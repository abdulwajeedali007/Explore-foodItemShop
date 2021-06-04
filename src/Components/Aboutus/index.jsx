import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutusimage from "../../Images/aboutusimage.png";
import { Link } from "react-router-dom";

import "./Aboutus.scss";

function index() {
  return (
    <div class="about__container">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="image__box">
              <img src={aboutusimage} alt="saladplate" className="img-fluid" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="content__area">
              <h5 className="small__heading">About us</h5>
              <h2 className="main__heading">
                Simply way of <br /> Eating Delicious
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                porro necessitatibus, ex vel voluptas corporis voluptatem cum
                aliquam harum at.
              </p>
              <Link to="/about-page">
                <button className="btnPrimary">Know More...</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
