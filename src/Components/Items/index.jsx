import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Items.scss";
import Cart from "./Cart";
function index() {
  return (
    <div className="items__container">
      <Container>
        <Row>
          <Col>
            <h4 className="small__heading">Recipes</h4>
            <h2 className="main__heading">Most Popular Items</h2>
          </Col>
        </Row>
        <Row>
          <Cart />
        </Row>
      </Container>
    </div>
  );
}

export default index;
