import React from 'react';
import { Container } from 'react-bootstrap';

const LanguageList = ({languages}) => {

    return (
        <Container>
            <b>Experience in the following programming languages:</b>
            
            { languages.map((item) => {
                return (
                    <Container key = {item.key}>
                        <p>{item.name}</p>
                    </Container>
                )
            })}
        </Container>
    )
}

export default LanguageList;