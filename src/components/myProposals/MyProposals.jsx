import React from "react";
import style from "./myProposal.module.css";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const MyProposals = () => {
  return (
    <React.Fragment>
      <div className={style.title__container}>
        <h2 className={style.title}>
          My <span>Proposals</span>
        </h2>
      </div>
      <div className={`container`}>
        <div className={style.my_proposals__container}>
          <h2 className={style.proposal__title}>
            Your Ticket to Freelance Success
          </h2>

          {/* toggle button  */}
          {/* <div class={style.btn-container}>
            <label class={`${style.switch} ${style.btn-color-mode}`}>
              <input
                type="checkbox"
                name="color_mode"
                id="color_mode"
                value="1"
              />
              <label
                for="color_mode"
                data-on="Dark"
                data-off="Light"
                class="btn-color-mode-switch-inner"
              ></label>
            </label>
          </div> */}

          {/* submit proposal  */}
          <div className="container">
            <Accordion defaultActiveKey="0" flush className={style.accordation}>
              <Accordion.Item eventKey="0" className={style.single__acordtn}>
                <Accordion.Header className={style.accrdtn__header}>
                  Submitted Proposals (5)
                </Accordion.Header>
                <Accordion.Body className={style.accrdtn__body}>
                <Table responsive>
                    <thead className={style.table__head}>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Order</th>
                        <th>Delivery Date</th>
                        <th>Delivery Pricing</th>
                        <th>Delivery Status</th>
                        <th>Payment</th>
                      </tr>
                    </thead>
                    <tbody className={style.table__body}>
                      <tr>
                        {/* order id  */}
                        <td>AKN12508</td>
                        {/* Customer  */}
                        <td>Olivia A...</td>
                        {/* order  */}
                        <td>UI Web Design</td>
                        {/* delvery date  */}
                        <td>12.06.2023</td>
                        {/* delivery pricig  */}
                        <td>$70.46</td>
                        {/* dlvery status  */}
                        <td>
                          <span className={style.active__status}>
                            <span>Active</span>
                          </span>
                        </td>
                        {/* Payment  */}
                        <td>Paypal</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={style.single__acordtn}>
                <Accordion.Header className={style.accrdtn__header}>
                  Active Jobs (3)
                </Accordion.Header>
                <Accordion.Body>
                  <Table responsive>
                    <thead className={style.table__head}>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Order</th>
                        <th>Delivery Date</th>
                        <th>Delivery Pricing</th>
                        <th>Delivery Status</th>
                        <th>Payment</th>
                      </tr>
                    </thead>
                    <tbody className={style.table__body}>
                      <tr>
                        {/* order id  */}
                        <td>AKN12508</td>
                        {/* Customer  */}
                        <td>Olivia A...</td>
                        {/* order  */}
                        <td>UI Web Design</td>
                        {/* delvery date  */}
                        <td>12.06.2023</td>
                        {/* delivery pricig  */}
                        <td>$70.46</td>
                        {/* dlvery status  */}
                        <td>
                          <span className={style.active__status}>
                            <span>Active</span>
                          </span>
                        </td>
                        {/* Payment  */}
                        <td>Paypal</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className={style.end__links}>
            <span>
              <Link to={'/jobforyou'}>Search for Jobs</Link>
            </span>
            <span>
              <Link to={'/seller-profile'}>Manage Your Profile</Link>
            </span>
          </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyProposals;
