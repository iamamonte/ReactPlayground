import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import {BsCalendar, BsFillTagFill} from 'react-icons/bs';
import {FiCamera} from 'react-icons/fi';
import {Profiles} from '../data/dummyData';
import {events} from '../data/dummydata.json';
import '../styles/EventDetails.css';

const EventDetails = () => {

  // dummy data for testing
  const event = events[0];

  // format map query
  const map_api = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPSAPIKEY}`;
  const formatted_location = formatLocation(event.location);
  const map_query = map_api + "&q=" + formatted_location;

  // format list of tags
  const renderedTags = event.tags.map((tag, i) =>  <p className="tag" key={i}><BsFillTagFill/>{tag}</p>);

  /**
   * Formats location for the Maps API
   * @param {String} location
   */
  function formatLocation(location) {
    location = location.split(",").map(x => x.trim().split(" "));
    location = location.map(arr => arr.join("+")).join(",");
    return location;
  }


  return (
    <Container className="event-details">
      <Row xs={1} lg={2}>
        <Col className="image"><img src={event.img} alt={event.name}/></Col>
        <Col className="map d-none d-lg-block">
          <iframe
            title="map"
            frameBorder="0"
            src={map_query} allowFullScreen>
          </iframe>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col className="main-details">
          <Row xs={1}>
            <Col className="name-section">
              <h1>{event.name}</h1>
              <span>0 people going</span>
            </Col>
            <Col className="profile-section">
              <PeopleComponent profile={Profiles.amonte}></PeopleComponent>
              <span>Posted an event</span>
            </Col>
            <Col className="about-header"><p>About</p></Col>
            <Col><p>{event.description}</p></Col>
          </Row>
        </Col>
        <Col className="extra-details">
          <Row xs={1}>
            <Col className="details">
              <Row xs={1} sm={2}>
                <Col>
                  <Row>
                    <Col className="icon" xs={1}>
                      <BsCalendar/>
                    </Col>
                    <Col className="detail" xs={11}>
                      <p className="title">{event.date}</p>
                      <p className="time">{event.time}</p>
                      <p className="add-to-calender">Add to Calendar</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="icon" xs={1}>
                      <FiCamera/>
                    </Col>
                    <Col className="detail" xs={11}>
                      <p className="title">Virtual/Zoom</p>
                      {event.link ? <p><a href={event.link}>{event.link}</a></p> : <p>No link provided</p>}
                      <p className="title">Organizer's Location</p>
                      <p>{event.location}</p>
                    </Col>
                  </Row>
                </Col>
                <Col>{renderedTags}</Col>
              </Row>
            </Col>
            <Col>
              <Row xs={1} sm={2} className="buttons">
                <Col><Button>Invite followers</Button></Col>
                <Col><Button>RSVP for Event</Button></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="map d-block d-lg-none">
          <iframe
            title="map"
            frameBorder="0"
            src={map_query} allowFullScreen>
          </iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
