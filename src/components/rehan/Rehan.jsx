import React from "react";
import "./rehanStyle.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Rehan = () => {
  return (
    <React.Fragment>
      <div className=" main__container">
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0" className="acc__item">
            <Accordion.Header className="acc__header">
              Total Number of Users
            </Accordion.Header>
            <Accordion.Body className="accord__body">
              <div className="acc__body">
                <div className="body__header">
                  <div className="duration">
                    <span>Daily User</span>
                    <span>Weekly User</span>
                    <span>Monthly User</span>
                  </div>
                  <div className="date__container">
                    <div className="calnder__container">
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                      To
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                    </div>
                    <span>Download CSV</span>
                  </div>
                </div>
                <div className="image__container">
                  <img src="/chart.png" alt="" />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* second accordion  */}
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0" className="acc__item">
            <Accordion.Header className="acc__header">
              Total Number of Users
            </Accordion.Header>
            <Accordion.Body className="accord__body">
              <div className="acc__body">
                <div className="body__header">
                  <div className="duration">
                    <span>Daily User</span>
                    <span>Weekly User</span>
                    <span>Monthly User</span>
                  </div>
                  <div className="date__container">
                    <div className="calnder__container">
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                      To
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                    </div>
                    <span>Download CSV</span>
                  </div>
                </div>
                <div className="image__container">
                  <img src="/chart.png" alt="" />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* third accordion  */}
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0" className="acc__item">
            <Accordion.Header className="acc__header">
              Total Number of Users
            </Accordion.Header>
            <Accordion.Body className="accord__body">
              <div className="acc__body">
                <div className="body__header">
                  <div className="duration">
                    <span>Daily User</span>
                    <span>Weekly User</span>
                    <span>Monthly User</span>
                  </div>
                  <div className="date__container">
                    <div className="calnder__container">
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                      To
                      <span>
                        <input type="date" placeholder="dd/mm/yyyy" />
                      </span>
                    </div>
                    <span>Download CSV</span>
                  </div>
                </div>
                <div className="image__container">
                  <img src="/chart.png" alt="" />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default Rehan;
