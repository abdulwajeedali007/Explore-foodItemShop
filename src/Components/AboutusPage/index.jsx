import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutpage.scss";

import pizzaImage from "../../Images/pizzahome.png";
import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";
function Index() {
  return (
    <div class="aboutpage__container">
      <div className="title__area">
        <Container>
          <Row>
            <Col>
              <h2 className="main__heading">About us</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="py-5">
          <Col lg={6}>
            <h2 className="main__heading">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              fuga dolore fugit neque, reiciendis natus minima similique porro
              totam, ullam est, molestias tempora magnam. Dolorem placeat vitae
              enim odio, fugit quam sed ducimus facere alias? Sapiente suscipit
              sint earum corporis ratione, minus error qui, in odio eum repellat
              quis nulla? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ut, accusantium? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Rerum, laboriosam?molestias tempora magnam.
              Dolorem placeat vitae enim odio, fugit quam sed ducimus facere
              alias? Sapiente suscipit sint earum corporis ratione, minus error
              qui,
            </p>
          </Col>
          <Col lg={6}>
            <div className="image__container">
              <img src={pizzaImage} alt="pizzaImage" />
              <img src={food1} alt="Chicken" />
              <img src={food2} alt="Mutton" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
