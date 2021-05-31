import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Allitems.scss";
import { Globalcontext } from "../../Context/GlobalContext";

function SingleCard({ Posts }) {
  const { addToCartAction, cartItems } = useContext(Globalcontext);

  // addtocart
  const handleClick = (item) => {
    addToCartAction({
      ...item,
      count: 1,
    });
  };
  const post = Posts.map((post, index) => (
    <Col lg={4}>
      <Card key={index} className="mt-4 p-0 boxShadow">
        <Card.Img variant="top" src={post.imageUrl} />
        <Card.Body>
          <Row className="align-items-center">
            <Col lg={7} md={6} xs={6}>
              <Card.Title className="title">{post.name}</Card.Title>
              <p className="m-0">
                <BiRupee />
                {post.price} Rs
              </p>
            </Col>

            <Col lg={5} md={6} xs={6} className="text-center">
              <button
                className={
                  cartItems.find((cart) => cart.id === post.id)
                    ? "addedToCart"
                    : `cardButton`
                }
                onClick={() => handleClick(post)}
              >
                <AiOutlineShoppingCart />{" "}
                {cartItems.find((cart) => cart.id === post.id)
                  ? "Added to cart"
                  : "Add to cart"}
              </button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));

  return post;
}

export default SingleCard;
