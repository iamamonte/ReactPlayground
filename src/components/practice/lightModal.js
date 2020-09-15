/**
 * @author Shayan A.
 */
import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LightModal = ({show, handleClose, title, text, children}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text}
          {children}
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <Button className='flex-fill' variant="secondary" onClick={handleClose}>
            Dismiss
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LightModal;