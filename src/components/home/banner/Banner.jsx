import React from "react";
import style from "./Banner.module.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className={style.homeBanner}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="mb-3" style={{color:"white"}}>
              Elevate Your <span className="active">Freelance</span> Journey
            </h1>
            <p className="mb-3" style={{color:"white"}}>
            Discover the freedom of freelancing with our platform. Connect with clients, showcase your skills, and thrive in the world of remote work.
            </p>
            <InputGroup className="mb-3 customSearch">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="button border" variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col md={6} className="mainbannerImagePart">
            <div className="banerkiImgDiv">
              <img
                className="mainHomeBannerImage"
                src="/assets/images/home/bannerImg.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
