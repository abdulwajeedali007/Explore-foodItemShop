import React, { useContext, useState } from "react";
import SingleCard from "./SingleCard";
import { IoSearchOutline } from "react-icons/io5";

import { Globalcontext } from "../../Context/GlobalContext";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./Allitems.scss";

function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const { allPosts } = useContext(Globalcontext);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let sortedItems = allPosts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="allitems">
        <Container>
          <Row>
            <Col>
              <h2 className="main__heading">All Items</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur autem nisi. <br /> A qui modi quidem expedita,
                perferendis velit optio!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="search__input">
                <InputGroup className="mb-3 ">
                  <FormControl
                    className="inputSearch"
                    placeholder="Enter food item name... Ex pizza, shawarma, tea,special..."
                    aria-describedby="basic-addon2"
                    onChange={(e) => handleChange(e)}
                    value={searchTerm}
                  />
                  <InputGroup.Text id="basic-addon2 inputButton">
                    <IoSearchOutline />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <SingleCard Posts={searchTerm.length > 0 ? sortedItems : allPosts} />
        </Row>
      </Container>
    </>
  );
}

export default Index;
