import React from "react";
import "./Allmessage.css";
import { Container } from "react-bootstrap";

function AllMessage() {
  return (
    <Container fluid className="all-message-main">
      <div className="Header-all-message">
        <h2>
          All <span className="mesg-all">Messages</span>
        </h2>
      </div>

      <div className="message-content"></div>
    </Container>
  );
}

export default AllMessage;
