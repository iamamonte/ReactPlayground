import React, { useState } from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';

function InputField() {
    // Declare a new state variable, which we'll call "count"
    const [word, setWord] = useState('');

    return (
        <Container>
            <p>{word}</p>
            <InputGroup size="lg">
                <InputGroup.Prepend >
                    <InputGroup.Text id="inputGroup-sizing-lg">Type something</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={(event) => setWord(event.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Container>
    );
}

export default InputField;