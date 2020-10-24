import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import {ImLocation} from 'react-icons/im';
import {BsCalendar, BsClockFill, BsFillTagFill} from 'react-icons/bs';


const EventDetails = ({event}) => {

  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <Row xs={1}>
            <Col>Image</Col>
            <Col>Title</Col>
            <Col>Profile</Col>
            <Col>About</Col>
            <Col>Description</Col>
          </Row>
        </Col>
          <Row xs={1}>
            <Col>Map</Col>
            <Col>
              <Row xs={1} sm={2}>
                <Col>Details</Col>
                <Col>Tags</Col>
              </Row>
            </Col>
            <Col>
              <Row xs={1} sm={2}>
                <Col>Invite Button</Col>
                <Col>RSVP Button</Col>
              </Row>
            </Col>
          </Row>
        <Col>

        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
