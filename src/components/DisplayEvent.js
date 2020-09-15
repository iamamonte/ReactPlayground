import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import {ImLocation} from 'react-icons/im';
import {BsCalendar, BsClockFill, BsFillTagFill} from 'react-icons/bs';
import '../styles/DisplayEvent.css';


const DisplayEvent = ({event, profile}) => {

  // format list of tags
  const renderedTags = [];
  for (const tag of event.tags) {
    renderedTags.push(<p className="tag"><BsFillTagFill/>{tag}</p>);
  }

  /**
   * Cuts off description after 500 characters and adds "More" link
   * @param {string} desc - description of event
   */
  function cutoffDesc (desc) {
    if (desc.length > 500) {
        return (
          <p>{desc.substring(0, 500) + "..."}
          <a href="/" className="more">More</a></p>
        );
    }
    else {
        return desc;
    }
}

  return (
      <Container className="event">
        <Row>
          <Col>
            <div className="imageTitle">
              <img src={event.img} alt={event.name}/>
              <p className="name">{event.name}</p>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row xs={1} className="info">
          <Col>
            <Row>
              <Col xs={12} md={4}>
                <PeopleComponent profile={profile}/>
              </Col>
              <Col xs={12} md={8} className="details">
                <Row>
                  <Col className="detail">
                    {renderedTags}
                  </Col>
                </Row>
                <Row>
                  <Col className="detail">
                    <p>
                      <BsCalendar/>
                      {event.date}
                    </p>
                    <p>
                      <BsClockFill/>
                      {event.time}
                    </p>
                    <p>
                      <ImLocation/>
                      {event.location}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            {cutoffDesc(event.description)}
          </Col>
          <Col>
            <p>[people icons] # People Going</p>
          </Col>
          <Col>
            <Button className="button">Remove RSVP</Button>
          </Col>
        </Row>
      </Container>
  );
};

export default DisplayEvent;
