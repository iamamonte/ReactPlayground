import React, {useState} from "react";
// import "../styles/app.css";

/**React Components */
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button"
// import {Modal} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Components*/
import IncrementButton from "./practice/IncrementButton";
import InputField from "./practice/InputField";
import ToastWrapper from "./practice/ToastWrapper";
import InternInfoDisplay from "./practice/InternInfoDisplay";
import LightModal from "./practice/lightModal";
import FadeText from "./practice/FadeText";
import PopOverTrigger from "./practice/PopOverButton";
import LanguageList from './practice/LanguageList';
import JokeModal from "./practice/JokeModal";

/** Components Continued */
import PeopleComponent from "./PeopleComponent";
// import ConfirmationBox from "./ConfirmationBox";


/* Models/Services */
import {Interns, Profiles} from '../data/dummyData'

// import JokeModal from "./JokeModal";


let amonte = Interns.amonte, sanjana = Interns.sanjana, 
shayan = Interns.shayan, sonia = Interns.sonia, adil = Interns.adil, kyle = Interns.kyle, 
henry = Interns.henry, disha = Interns.disha, luis = Interns.luis;


let amonteProfile = Profiles.amonte, kyleProfile = Profiles.kyle;


/*
const ConfirmModal = ({header, content}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _header = header;
  const _content = content;
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Test Confirm Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
        <ConfirmationBox header={_header} content={_content}  />
        <Button  className="d-flex justify-content-center" style={{backgroundColor:"#402366", color:"white",width:"80%",margin:"0 auto 0 auto"}}  onClick={handleClose}>
            Okay
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );

}
*/



const Playground = (props) => {
  const [show, setShow] = useState(false);
  const[showJoke, setJoke]=useState(false);

  

  return (
    <Container>
      <Jumbotron>
        <h1 className="header">TurnUp React Playground</h1>
        <ToastWrapper title="Welcome!">
        <span role="img" aria-label="tada">
          🎉 🎉 🎉 🎉
        </span>
      
        </ToastWrapper>
        <Container>
          <Row xs={1} md={2} lg={3} className='justify-content-center'>
            <Col className="my-3">
              <InternInfoDisplay
                intern={amonte}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Hi, welcome.</div>
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <InternInfoDisplay
                intern={sanjana}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Hi, nice to meet you!</div>
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <LightModal show={show}
                          handleClose={() => setShow(false)}
                          title="Hello Everyone" text="Woohoo, you're reading this text in a modal!">
                <div className='badge badge-primary'>fun badge</div>
              </LightModal>
              <InternInfoDisplay
                intern={shayan}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  setShow(true)
                }}
              >
                <div>I'm excited to be here!</div>
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <InternInfoDisplay
                intern={sonia}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Hi!!</div>
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <InternInfoDisplay intern={adil} onClick={() => {
                let content = "This was also logged to the console";
                console.log(content);
                alert(content);
              }}>
                <div>
                  They call me Mister Tibbs!
                </div>
                <br/>
                <PopOverTrigger text="Click to see a popover">
                <div>In Progress</div>
              </PopOverTrigger>
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <InternInfoDisplay
                intern={kyle}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}>
                <div>Looking forward to working with you all</div>
                <br></br>
                <LanguageList languages={[
                  {name: 'Java', key: '1'},
                  {name: 'JavaScript', key: '2'},
                  {name: 'Python', key: '3'},
                  {name: 'Swift', key: '4'},
                  {name: 'C', key: '5'},
                ]}/>
                <PeopleComponent profile={kyleProfile} />
                <PeopleComponent profile={amonteProfile} />
              </InternInfoDisplay>
            </Col>
            <Col className="my-3">
              <InternInfoDisplay
                intern={henry}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Excited to be working with you all!</div>
              </InternInfoDisplay></Col>
            <Col className="my-3">
              <InternInfoDisplay
                intern={disha}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <br/>
                <br/>
              <div><FadeText></FadeText></div>
              </InternInfoDisplay>
              {/* <br></br>
              <div><FadeText></FadeText></div> */}
            </Col>

            <Col className="my-3">
              <InternInfoDisplay
                intern={luis}
                onClick={() => {
                  setJoke(true);
                }}>
                <JokeModal
                value={showJoke}
                hide={()=>setJoke(false)}/>
                <div>Programming Joke: What is a ghost's favorite type?</div>
              </InternInfoDisplay>
            </Col>

          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron hidden>
        <IncrementButton/>
      </Jumbotron>

      <Jumbotron hidden>
        <InputField/>
      </Jumbotron>

    </Container>
  )
};

export default Playground;