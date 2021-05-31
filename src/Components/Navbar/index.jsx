import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosBasket } from "react-icons/io";
import "./navbar.scss";

import { Globalcontext } from "../../Context/GlobalContext";
function Index() {
  // length value cart icon
  const { cartItems } = useContext(Globalcontext);

  return (
    <div className="navbar__main">
      {/*pizza, shorma, chai*/}
      <Container>
        <Row>
          <Col>
            <div className="navbar__container">
              <Link to="/">
                <h1>🍲 Explore </h1>
              </Link>
              <nav className="navbar__nav">
                <ul>
                  <li className="navbar__item">
                    <Link to="/cart" className="navbar__link">
                      <IoIosBasket />
                      <p className="cart-data">
                        {cartItems.length > 0 ? cartItems.length : 0}
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
