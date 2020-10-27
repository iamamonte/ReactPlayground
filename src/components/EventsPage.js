import React from 'react';
import { Row, Col, Button, Card, Container, InputGroup, FormControl, Form } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import { HiLocationMarker } from 'react-icons/hi';
import { BsClockFill } from 'react-icons/bs';
import { BiCalendarAlt, BiSearch } from 'react-icons/bi';
import { Profiles } from '../data/dummyData';
import Events from '../data/dummydata.json';

import '../styles/EventsPage.css';

const EventsPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={8}>
                    {Events.events.map((event, i) => {
                        return (
                            <Card border="dark" className="event" key={i}>
                                <Card.Img variant="top" src={event.img} alt={event.name} width="200" height="300" />
                                <Card.Body>
                                    <Row>
                                        <Col xs={5}>
                                            <div className="profile"><PeopleComponent profile={Profiles.amonte} /><small>Posted an events</small></div>
                                        </Col>
                                        <Col className="detail" xs={7}>
                                            <div><BiCalendarAlt size={15} /><span>{event.date}</span>
                                                <BsClockFill size={15} /><span>{event.time}</span>
                                                <HiLocationMarker size={15} /><span>{event.location}</span></div>
                                        </Col>
                                    </Row>
                                    <Card.Title className="title">
                                        {event.name}
                                    </Card.Title>
                                    <Card.Text className="text">
                                        {event.description}
                                    </Card.Text>
                                    <small>89 People Going</small>
                                    <Button className="button" size="sm">RSVP</Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Col>
                <Col xs={6} md={4}>
                    <Form className="form">
                        <InputGroup>
                            <FormControl placeholder="Search for events"/>
                            <InputGroup.Append>
                                <Button variant="outline-secondary"><BiSearch /></Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <Form.Group as={Col}>
                            <p>Filter:</p>
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>Both</option>
                                <option>Virtual</option>
                                <option>In Person</option>
                            </Form.Control>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>All</option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </Form.Control>
                            <Form.Label>City/Town (Please select the location on list below)</Form.Label>
                            <Form.Control custom size="sm" as="select">
                                <option value="0">Choose...</option>
                            </Form.Control>
                            <div className="text-center radio">
                                <Form.Check inline label="All" type="radio" name="formHorizontalRadios" />
                                <Form.Check inline label="Date" type="radio" name="formHorizontalRadios" />
                                <Form.Check inline label="Date Range" type="radio" name="formHorizontalRadios" />
                            </div>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>All</option>
                            </Form.Control>
                            <p>Sort:</p>
                            <Form.Label>Sort by</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>Soonest</option>
                                <option>Closest</option>
                                <option>Popularity</option>
                            </Form.Control>
                            <Form.Label>Category</Form.Label>
                            <Form.Control size="sm" as="select">
                                <option>Both</option>
                                <option>Political Campaign</option>
                                <option>Activism</option>
                            </Form.Control>
                            <div className="text-center">
                                <Button className="button" type="submit" value="Submit">Apply Filters</Button>
                            </div>
                            <div className="text-center">
                                <Button variant="link" type="reset" value="Reset">Clear Filters</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default EventsPage;
