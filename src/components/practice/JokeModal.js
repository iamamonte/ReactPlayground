import React from 'react'; 
import Modal from 'react-bootstrap/Modal'; 

const JokeModal = (props) => {
    return(
        <Modal
        size="sm"
        show={props.value}
        onHide={props.hide}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Answer:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>BOOOOOOOOOLEAN</Modal.Body>
      </Modal>
    );

}

export default JokeModal;