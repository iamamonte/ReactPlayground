import React from 'react';
import Image from 'react-bootstrap/Image';
import {Button, Row, Col, Container} from "react-bootstrap";
import '../styles/ResourceGrid.css';


const ResourceGrid = ({resources, type}) => {

    function listType() {
        return(
            <Container>
                <Row xs={1} className="list">
                    {resources.map((resource, i) => (
                        <Col key={i} className="list-item">
                            <h1>{resource.name}</h1>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    function cardType() {
        return(
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {resources.map((resource, i) => (
                        <Col key={i} className="card">
                            <div>
                                <Image src={resource.image}/>
                                <h1>{resource.name}</h1>
                                <p>{resource.description}</p>
                                <Button>SEE MORE</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    return (
        <div className="resource-grid">
            {type === "list" ? listType() : cardType()}
        </div>
    );
};

export default ResourceGrid;