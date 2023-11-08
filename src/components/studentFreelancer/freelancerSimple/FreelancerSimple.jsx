import React from "react";
import style from "./freelancersimple.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
// import Button from "../../Button";
const FreelancerSimple = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className={style.freelancer__simple_container}>
              <h2>Simple & Flexible Work on Your Terms</h2>
              <p>
                Connect with people to make a difference by offering work
                opportunities that have a positive impact on their financial
                independence and personal growth. Help nurture and grow their
                confidence and readiness for their academic success. Together,
                let's unlock their potential and inspire a generation of
                ambitious and capable individuals.
              </p>
              <h4 className="mt-3 mb-1">Our Mission</h4>
              <p> Connect with people to make a difference by offering work
                opportunities that have a positive impact on their financial
                independence and personal growth.</p>
              <h4 className="mt-3 mb-1">Our Vision</h4>
              <p> Connect with people to make a difference by offering work
                opportunities that have a positive impact on their financial
                independence and personal growth.</p>
            </div>
          </Col>
          <Col  md={12} lg={6}>
            <div className={style.image__container}>
              <img
                src="/asserts/images/aboutus/paiiii.jpeg"
                alt=""
                width={572}
                height={516}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FreelancerSimple;
