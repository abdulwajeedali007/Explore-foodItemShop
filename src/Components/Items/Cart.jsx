import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { CgMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Items.scss";
import { Globalcontext } from "../../Context/GlobalContext";

function SingleCard() {
  const { allPosts } = useContext(Globalcontext);

  //   getting latest items

  const latestItems = allPosts.filter((post) => {
    return post.latest === true;
  });

  const lastestFoodItems = latestItems.map((post) => (
    <Col lg={4} key={post.id}>
      <Card className="mt-4 p-0 boxShadow">
        <Card.Img variant="top" src={post.imageUrl} />
        <Card.Body>
          <Row className="align-items-center">
            <Col lg={7} md={6} xs={6}>
              <Card.Title className="title">{post.name}</Card.Title>
              <p className="m-0 text">
                <BiRupee />
                {post.price} Rs
              </p>
            </Col>
            <Col lg={5} md={6} xs={6} className="text-center">
              <Link to="/items">
                <button className="cardButton ">
                  Know more <CgMore />
                </button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));

  return lastestFoodItems;
}

export default SingleCard;
