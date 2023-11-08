import React from "react";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container>
      <div style={{ textAlign: "center" }} className="mtop80">
        <h1 className="active" style={{ marginBottom: "30px" }}>
          Oops! Page not Found.
        </h1>
        <p>We apologize for the inconvenience. This page does not exist!</p>
      </div>
    </Container>
  );
};

export default ErrorPage;
