import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const PopOver = (
  <Popover>
    <Popover.Title as="h3">Popover Title</Popover.Title>
    <Popover.Content>Popover Content</Popover.Content>
  </Popover>
);
  
  const PopOverTrigger = ({text}) => {
    return (
    <OverlayTrigger trigger="click" placement="right" overlay={PopOver}>
      <Button variant="success">{text}</Button>
    </OverlayTrigger>
    );
  };
  
  export default PopOverTrigger;