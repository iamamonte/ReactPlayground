import React, { useState } from 'react';
import { Row, Col, Button, Container, InputGroup, FormControl, Form } from 'react-bootstrap';
import DisplayEvent from "./DisplayEvent";
import { BiSearch } from 'react-icons/bi';
import { Profiles } from '../data/dummyData';
import Data from '../data/dummydata.json';

import '../styles/EventsPage.css';

const EventsPage = () => {
    const [type, setType] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [tags, setTags] = useState('');
    const [sortby, setSortBy] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    };
    
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={8} className="event">
                    <Row>
                        <Button className="button">CREATE EVENT</Button>
                    </Row>
                    {Data.events.map((Event, i) => {
                        return (
                            <Row key={i}>
                                <DisplayEvent event={Event} profile={Profiles.amonte} />
                            </Row>
                        );
                    })}
                </Col>
                <Col xs={6} md={4}>
                    <Form className="form">
                        <Form.Group as={Col}>
                            <InputGroup>
                                <FormControl placeholder="Search for events" />
                                <InputGroup.Append>
                                    <Button type="submit" variant="outline-secondary"><BiSearch /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <p>Filter:</p>
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control as="select" size="sm" value={type} onChange={e => setType(e.target.value)}>
                                <option>Both</option>
                                <option>Virtual</option>
                                <option>In Person</option>
                            </Form.Control>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" size="sm" value={state} onChange={e => setState(e.target.value)} >
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
                            <Form.Control custom size="sm" as="select" value={city} onChange={e => setCity(e.target.value)}>
                                <option value="0">Choose...</option>
                            </Form.Control>
                            <div className="text-center radio">
                                <Form.Check inline label="All" type="radio" name="formHorizontalRadios" />
                                <Form.Check inline label="Date" type="radio" name="formHorizontalRadios" />
                                <Form.Check inline label="Date Range" type="radio" name="formHorizontalRadios" />
                            </div>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="select" size="sm" value={tags} onChange={e => setTags(e.target.value)}>
                                <option>All</option>
                            </Form.Control>
                            <p>Sort:</p>
                            <Form.Label>Sort by</Form.Label>
                            <Form.Control as="select" size="sm" value={sortby} onChange={e => setSortBy(e.target.value)}>
                                <option>Soonest</option>
                                <option>Closest</option>
                                <option>Popularity</option>
                            </Form.Control>
                            <Form.Label>Category</Form.Label>
                            <Form.Control size="sm" as="select" value={category} onChange={e => setCategory(e.target.value)}>
                                <option>Both</option>
                                <option>Political Campaign</option>
                                <option>Activism</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="text-center" onSubmit={handleSubmit}>
                                <Button className="button" type="submit" value="Submit">Apply Filters</Button>
                            </div>
                            <div className="text-center">
                                <Button variant="link" type="reset" value="Reset">Clear Filters</Button>
                            </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default EventsPage;
