import React from 'react';
import Image from 'react-bootstrap/Image';
import {Button, Row, Col, Card, Container} from "react-bootstrap";
import '../styles/ResourceGrid.css';


const ResourceGrid = ({resources, type}) => {

    /**
     * Displays resources as a list of names
     */
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

    /**
     * Displays resources as cards with images, names, and descriptions
     */
    function cardType() {
        return(
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {resources.map((resource, i) => (
                        <Col key={i}>
                            <Card>
                                <Image src={resource.image}/>
                                <h1>{resource.name}</h1>
                                <p>{cutoffDesc(resource.description)}</p>
                                <Button>SEE MORE</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    /**
     * Cuts off description after 100 characters
     * @param {string} desc - description of resource
     */
    function cutoffDesc (desc) {
        if (desc.length > 100) {
            return desc.substring(0, 100) + "...";
        }
        else {
            return desc;
        }
    }

    return (
        <div className="resource-grid">
            {type === "list" ? listType() : cardType()}
        </div>
    );
};

export default ResourceGrid;