import React from 'react';
import { Button } from 'react-bootstrap';

const Icon = ({onClick, color, children}) => {
  return (
    <div>
      <Button variant="Light" onClick={onClick} style={{color:color}}>
        {children}
      </Button>
    </div>
  );
};

export default Icon;