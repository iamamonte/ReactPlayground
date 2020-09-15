import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function IncrementButton() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <Container>
            <p>Wow! You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
                Click me
      </Button>
        </Container>
    );
}

export default IncrementButton;