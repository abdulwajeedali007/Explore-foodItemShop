import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
function DetailsCart(props) {
  //   modal
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="popupHeader">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.post.name.split(" ").length > 1
            ? props.post.name.toUpperCase().split(" ")[1]
            : props.post.name.toUpperCase()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="popBody">
        <Container>
          <Row>
            <Col lg={4}>
              <img
                src={props.post.imageUrl}
                alt={props.post.name}
                rounded
                className="detailsPopimage"
              />
            </Col>
            <Col lg={8}>
              <h4 className="popTitle">{props.post.name}</h4>
              <h2 className="popPrice">
                <BiRupee />
                {props.post.price}
              </h2>
              <p className="popDescription">{props.post.ingradients}</p>
              <p className="hastags">
                {props.post.hastag.map((hastags) => (
                  <span>#{hastags}</span>
                ))}
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default DetailsCart;
