import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function PurpleButton() {
  const bgColor = "purple";

  return (
    <Container>
      <p>Look at this pretty button!</p>
      <Button style={{ backgroundColor: bgColor }}>Click me</Button>
    </Container>
  );
}

export default PurpleButton;
