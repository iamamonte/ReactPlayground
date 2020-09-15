import React from 'react'
import { Container } from "react-bootstrap";
import  Button  from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';


function FadeText() {
  const [open, setOpen] = useState(true);
    return (
      <Container>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Toggle text
      </Button>
      <Fade in={open} id="fade-parent" >
        <div id="example-fade-text">
       <p id="fadeTest"> This content will fade in and out as the button is pressed.</p>
        </div>
      </Fade>
      </Container>
    );
  }
  
  export default FadeText;