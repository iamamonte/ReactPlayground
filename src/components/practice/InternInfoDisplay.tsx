import React from 'react';
import { Card, Button, Badge} from 'react-bootstrap';
import {InternViewModel} from '../../ViewModel/InternViewModels'



const InternInfoDisplay = ({intern,onClick,children}:InternViewModel) => {
    if(!intern){
        return (
            <Card>
                <Card.Body>
                    No intern data was passed in.
                </Card.Body>
            </Card>
        )
    }

    let _onClick = () => {alert("No overload was passed in. So here we are.")};
    //handle the condition where no onclick was passed in
    if (onClick !== undefined)
    {
        _onClick = () => onClick();
    }

    return (
        <Card >
            <Card.Img variant="top" src={intern.ImgSource} />
            <Card.Body>
                <Card.Title>{intern.Name}<Badge variant="secondary">{intern.Team}</Badge></Card.Title>
                <Card.Text>
                    {intern.Description}
                </Card.Text>
                <Button variant="primary" onClick={() => _onClick()}>Click me</Button>
                {children}
            </Card.Body>
        </Card>)
}


export default InternInfoDisplay;