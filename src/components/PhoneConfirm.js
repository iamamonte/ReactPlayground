/**
 * @author Tanya
 * 
 */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import { InputGroup } from 'react-bootstrap';

function click(e)
{
  e.preventDefault();

}



const PhoneConfirm = () => 
{
  return (

<Row>
     <Col>
     <img src="https://images.unsplash.com/photo-1594051108846-badee16b08dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" align="left" alt=""/>;
      </Col>
      <Col>
      <React.Fragment>

<Form>
<Form.Group controlId="formPhoneNumber">
    <Form.Label>
        <b>Phone Number</b>
        </Form.Label>
        <InputGroup>
        <Form.Control type="tel" maxLength="12" size="12px" placeholder="Enter phone number"/>
        </InputGroup>
  </Form.Group>
  <Button size="lg" onClick={click} >Send Confirmation Code</Button>
</Form>

<Form>
<Form.Group controlId="confirmCode">
    <Form.Label>
        <b>Confirmation Code</b>
        </Form.Label>
        <InputGroup>
        <Form.Control type="text" placeholder="Enter confirmation code" />
        </InputGroup>
  </Form.Group>
       <Button id="continue" size="lg">Continue</Button>
       </Form>
  </React.Fragment>
      </Col>
      </Row>
 
  )
}

  export default PhoneConfirm;