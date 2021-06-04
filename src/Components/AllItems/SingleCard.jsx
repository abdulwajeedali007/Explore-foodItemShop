import React, { useContext, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Allitems.scss";
import { Globalcontext } from "../../Context/GlobalContext";
import DetailsCart from "./DetailsCart";

function SingleCard({ Posts }) {
  const { addToCartAction, cartItems } = useContext(Globalcontext);
  const [value, setValue] = useState(0);
  // addtocart
  const handleClick = (item) => {
    addToCartAction({
      ...item,
      count: 1,
    });
  };

  const getModal = (id) => {
    setValue(id);
  };

  const hideModal = () => {
    setValue(0);
  };

  const post = Posts.map((post) => (
    <Col lg={4} key={post.id}>
      <Card className="mt-4 p-0 boxShadow">
        <div className="image__hover__content">
          <Card.Img variant="top" src={post.imageUrl} />
          <div className="details__button" onClick={() => getModal(post.id)}>
            Details
          </div>
        </div>
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
      <DetailsCart
        show={value === post.id}
        onHide={() => hideModal(post.id)}
        post={post}
      />
    </Col>
  ));

  return post;
}

export default SingleCard;
