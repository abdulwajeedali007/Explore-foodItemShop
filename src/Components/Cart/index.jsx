import "./Cart.scss";

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

import { Globalcontext } from "../../Context/GlobalContext";

function Index() {
  const { cartItems, deleteItem, increment, decrement, grandTotal, clearData } =
    useContext(Globalcontext);
  // cart total
  // checkout
  const checkOut = () => {
    alert("Need to add check out functionality");
    clearData();
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {cartItems.length < 1 ? (
          <Col>
            {" "}
            <h1 className="empty">your cart is empty please</h1>{" "}
            <p>
              Back to items page <Link to="/items">Items</Link>
            </p>
          </Col>
        ) : (
          <>
            <Col lg={7} md={12}>
              <div className="details__heading">
                <p>Image</p>
                <p>Food Name</p>
                <p>Count</p>
                <p>Inc/Dec</p>
                <p>Delete</p>
                <p>Total</p>
              </div>
              <hr />
              {cartItems.map((cart) => (
                <div className="cart__container" key={cart.id}>
                  <div className="image__container">
                    <img src={cart.imageUrl} alt={cart.name} />
                  </div>
                  <div className="cart__details">
                    <div className="product">
                      <h4 className="product__name">{cart.name}</h4>
                      <p className="product__price">
                        <BiRupee />
                        {cart.price}
                      </p>
                    </div>
                    <div className="product__incdec">
                      <button className="add" onClick={() => increment(cart)}>
                        +
                      </button>
                      <button>{cart.count}</button>
                      <button className="dec" onClick={() => decrement(cart)}>
                        -
                      </button>
                    </div>
                    <div className="valueprice">
                      <p>
                        {cart.count} X {cart.price}
                      </p>
                    </div>
                    <div className="deletIcon">
                      <RiDeleteBinLine onClick={() => deleteItem(cart)} />
                    </div>
                    <div className="totalPrice">
                      <h4>
                        <BiRupee />
                        {cart.price * cart.count}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={5} md={12}>
              <h4 className="totalnoof">
                No of Items{" "}
                {cartItems.length < 10
                  ? `0${cartItems.length}`
                  : cartItems.length}
              </h4>
              <div className="total">
                Total Amount : <BiRupee />
                {grandTotal()}
              </div>
              <button className="btnCheckout" onClick={() => checkOut()}>
                Check Out
              </button>
            </Col>
          </>
        )}
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col>
          <button className="clearOut" onClick={() => clearData()}>
            Clear Cart-(Empty)
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
