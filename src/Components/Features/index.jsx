import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Features.scss";
import { IoFastFoodOutline } from "react-icons/io5";
import { GoSmiley } from "react-icons/go";
import { RiEBike2Line } from "react-icons/ri";

import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";

function index() {
  return (
    <div className="features__container">
      <div className="imageoutbox">
        <img src={food1} alt="pizza" />
      </div>
      <div className="imageout2">
        <img src={food2} alt="shawarma" />
      </div>
      <Container>
        <Row>
          <Col>
            <h4 className="small__heading">Features</h4>
            <h2 className="main__heading">Our Awesome Services</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <div className="service">
              <div className="icon">
                <IoFastFoodOutline />
              </div>
              <div className="name">Quality Food</div>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident eum placeat perferendis, doloribus deleniti sint!
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="service">
              <div className="icon">
                <GoSmiley />
              </div>
              <div className="name">Super Taste</div>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident eum placeat perferendis, doloribus deleniti sint!
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="service">
              <div className="icon">
                <RiEBike2Line />
              </div>
              <div className="name">Fast Delivery</div>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident eum placeat perferendis, doloribus deleniti sint!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
