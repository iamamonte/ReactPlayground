/**
 * @author Sonia S.
 */

import React from 'react';
import ImgButton from '../practice/ImgButton';
import {Jumbotron} from "react-bootstrap";
import Counter from '../practice/Counter';


function soniaPage() {
  return (
      <Jumbotron>
          <h1>Sonia's Task 2 Routing Page</h1>
          <hr/>
          <p>Hi! My name is Sonia. I created this component for Task 1...</p>
          <p>Click the button to generate a random dog image:</p>
          <ImgButton></ImgButton>
          <Counter></Counter>
      </Jumbotron>
  );
}

export default soniaPage;
