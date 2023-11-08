import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import style from "./PopularTask.module.css";
const PopularTask = () => {
  return (
    <Container className="mt-5">
      <div className="profileHead mb-5">
        <h2 className="what-we-serve">
          What We <span className="active">Serve</span>
        </h2>
        <p className="subhead">
          Unlock your creative potential with our innovative services.{" "}
        </p>
      </div>
      <Row>
        <Col md={4}>
          <div className={style.box}>
            <h4>Graphic Designing</h4>
            <p>Elevate your brand with captivating graphic design solutions.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>UI/UX Design</h4>
            <p>
              Crafting intuitive experiences through exceptional UI/UX design.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Web Development</h4>
            <p>Building innovative and responsive websites that drive your success.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>SEO (Digital Marketing)</h4>
            <p>Boost your online visibility with effective SEO strategies and tactics.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Lead Generation</h4>
            <p>Generate quality leads that fuel your business growth and success.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Content Writer</h4>
            <p>Engage your audience with compelling and impactful content writing.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Email Marketing</h4>
            <p>Drive results with strategic email marketing campaigns.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Virtual Assitance</h4>
            <p>Efficient virtual assistance tailored to your business needs and goals.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={style.box}>
            <h4>Tele-Marketing</h4>
            <p>Connect, engage, and convert with expert tele-marketing solutions.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularTask;
