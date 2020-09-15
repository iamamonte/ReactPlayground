/**
 * @author Adil M.
 */
import React from "react";
import { Tab ,Tabs } from 'react-bootstrap';
import {Jumbotron} from "react-bootstrap";
import InternInfoDisplay from "../practice/InternInfoDisplay";


/* Models/Services */

import {Intern} from "../../model/Intern";

let adil = new Intern(
  "Adil ",
  "Rising Junior at UMB",
  "Intern (Web/Mobile Dev)",
  "https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png",
  new Date("7/20/20")
);

function AdilPage() {
  return (
      <Jumbotron>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="profile" title="Profile">
                      <InternInfoDisplay
                           intern={adil}
                           onClick={() => {
                             let content = "Hi! My name is Adil. An engaged and motivated Computer Science student with strong communication and self-motivational skills.";
                             alert(content);
                           }}
                      >
                      </InternInfoDisplay>    
                </Tab>
                <Tab eventKey="contact" title="Contact">
                     <p>
                     </p>
                </Tab>
          </Tabs>
      </Jumbotron>
  );
}

export default AdilPage;
