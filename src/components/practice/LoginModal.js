/**
 * @author Shayan A.
 */
import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";

const LoginModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>TurnUP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <div className='flex-group'>
              <i className="fa fa-user" aria-hidden="true"/>
              <Form.Control type="email" placeholder="Enter email"/>
            </div>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <div className='flex-group'>
              <i className="fa fa-lock"/>
              <Form.Control type="password" placeholder="Password"/>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me"/>
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit" block onClick={handleClose}>
          Login
        </Button>
      </Modal.Body>
      <Modal.Footer style={{justifyContent: 'flex-start'}}>
        <div style={{color: '#919aa1'}}>Don't have an account? <a href='/#'>Sign up</a></div>
        <a href='/#'>Forgot your password?</a>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;