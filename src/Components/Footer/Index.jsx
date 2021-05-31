import "./footer.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

import footerPineapple from "../../Images/footer-pineapple.png";
import footerplate from "../../Images/footer-plate.png";

function Index() {
  return (
    <div className="footer__container">
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12} className="mb-3">
            <div className="image__logo">
              <img src={footerPineapple} alt="Footerpineapple" />
              <div className="content">
                <h3>Explore</h3>
                <p>
                  <GoLocation /> Hyderabad-500001
                </p>
                <p>
                  <BsPhone /> +91 9133-666-188
                </p>
                <p>
                  <HiOutlineMail /> abdulwajeedali007@gmail.com
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-3">
            <div className="details">
              <h4>About us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                repellendus esse voluptate, nobis inventore, nisi voluptatibus
                repellat obcaecati pariatur totam ullam officia, veniam tenetur
                maxime? Voluptatibus quos dolore perspiciatis voluptas!
              </p>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="mb-3">
            <div className="food__items">
              <h4>Special Items</h4>
              <ul>
                <li>Special pizza</li>
                <li>Hot pizza</li>
                <li>Normal pizza</li>
                <li>Special shawarma</li>
                <li>Chicken shawarma</li>
                <li>Mutton shawarma</li>
                <li>Cool Drinks</li>
                <li>Special Tea</li>
                <li>Normal Tea</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footerlink">
              &copy; copyright-2021{" "}
              <Link to="/">Self Development (Learning)</Link>
            </p>
          </Col>
        </Row>
      </Container>
      <img src={footerplate} alt="fruitesdish" className="outImage" />
    </div>
  );
}

export default Index;
