import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const ShortForm = () => {
  return (
    <div className="shortForm">
      <Container>
        <Row className="columnRevers">
          <Col md={6}>
            <h2>Newsletter</h2>
            <p>Stay informed with our captivating newsletter delivering the <br /> latest updates.</p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary button" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShortForm;
