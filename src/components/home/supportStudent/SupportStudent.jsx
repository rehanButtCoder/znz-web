import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./SupportStudent.module.css";

function SupportStudent(props) {
  return (
    <div className={style.stdentSupport}>
      <Container>
        <Row>
          <Col md={4} className="px-3">
            <div className="trustSafety">
              <div>
                <img src={props.image1 ? props.image1 : "/asserts/images/home/c1.jpg"} alt="" />{" "}
              </div>
              <div className="trustSafetycontent">
                <h4 className="green">Support Students</h4>
                <p>
                  Empowering students with a reliable <br /> and comprehensive support
                  system.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="px-3  py-md-0 py-5 ">
            <div className="trustSafety">
              <div>
                <img src={props.image2 ? props.image2 : "/asserts/images/home/c2.jpg"} alt="" />{" "}
              </div>
              <div className="trustSafetycontent">
                <h4 className="yellow">Trust & Safety</h4>
                <p>
                Ensuring trust and safety for a secure <br />  and worry-free experience.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="px-4">
            <div className="trustSafety">
              <div>
                <img src={props.image3 ? props.image3 : "/asserts/images/home/c3.jpg"} alt="" />{" "}
              </div>
              <div className="trustSafetycontent">
                <h4 className="blue">Time on Hands</h4>
                <p>
                Make the most of your time with our convenient and efficient solutions.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupportStudent;
