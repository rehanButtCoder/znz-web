import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./notificatn.css";
import ModalBody from "./modal-body/ModalBody";
const Notificatn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div >
        <span onClick={handleShowModal} className="reltve">
          Open Modal
        </span>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          className="right-modal"
        >
          <Modal.Body className="modal-body">
            <ModalBody close={handleCloseModal} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Notificatn;
