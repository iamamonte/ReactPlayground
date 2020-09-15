import React, {useState} from "react";
// import "../styles/app.css";

/**React Components */
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import {Modal} from "react-bootstrap"

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
import Counter from './practice/Counter';
import DisplayEvent from './DisplayEvent';

/** Components Continued */

import PeopleComponent from "./PeopleComponent";
import CreatePost from "./CreatePost"
import ConfirmationBox from "./ConfirmationBox";
import MissionsCarousel from "./MissionsCarousel"


/* Models/Services */
import {Intern} from "../model/Intern";


// import JokeModal from "./JokeModal";

import profilePic from '../resources/profilePicture.jpeg'
import DisplayPost from "./DisplayPost";
import Icon from "./Icon";
import {BsFillAlarmFill} from 'react-icons/bs';

let amonte = new Intern(
  "Amonte",
  "Just a regular Joe named Amonte.",
  "Intern Lead",
  "https://cdn.ebaumsworld.com/mediaFiles/picture/730195/86187705.jpg",
  new Date("1/1/21")
);
let sanjana = new Intern(
  "Sanjana",
  "Sophomore at UT Austin",
  "Backend Web/Intern Lead",
  "https://picjumbo.com/wp-content/uploads/free-stock-photos-san-francisco-1080x720.jpg",
  new Date("8/21/20")
);
let shayan = new Intern(
  "Shayan",
  "may the force be with you.",
  "Frontend Web/Intern Lead",
  "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  new Date("9/8/20")
);

let henry = new Intern(
  "Henry",
  "From New York",
  "Backend Web Intern",
  "https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg",
  new Date("9/1/20"));


let sonia = new Intern(
  "Sonia",
  "Rising Sophomore at UW",
  "Intern (Web/Mobile Dev)",
  "https://cdn.pixabay.com/photo/2015/07/17/18/01/portland-bill-849583_960_720.jpg",
  new Date("9/25/20")
);

let disha = new Intern(
  "Disha",
  "Believe in yourself",
  "Intern (Mobile Developer)",
  "https://wallpaperaccess.com/full/142733.jpg",
  new Date("8/30/20")
);
let adil = new Intern(
  "Adil ",
  "Rising Junior at UMB",
  "Intern (Web/Mobile Dev)",
  "https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png",
  new Date("7/20/20")
);

let kyle = new Intern(
  "Kyle",
  "Rising Sophomore at Grinnell College",
  "Intern (Web/Mobile Dev)",
  "https://www.psdstack.com/wp-content/uploads/2016/10/featured-copyright-free-mages.jpg",
  new Date("8/20/20")
);

let luis = new Intern(
  "Luis",
  "Senior at George Mason University",
  "Intern (FrontEnd Web)",
  "https://i.pinimg.com/600x315/88/5b/7b/885b7b783181234c51ea17ec48a02506.jpg",
  new Date("8/30/20")
);

const items = [
  {
    img: "/img/BLM.png",
    alt:"blm",
    caption: "TurnUp believes People’s Rights are Human Rights and Human Rights are People’s Rights",
  },
  {
    img: "/img/BLM.png",
    alt:"blm",
    caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    img: "/img/BLM.png",
    alt:"blm",
    caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]

let kyleProfile = {
  firstName: "Kyle",
  lastName: "Kobayashi",
  city: "Miami",
  state: "FL",
  country: "US",
  profileImage:profilePic
};

let amonteProfile = {
  firstName: "Amonte",
  lastName: "Andrews",
  city: "St Petersburg",
  state: "FL",
  country: "US",
  profileImage:"https://cdn.ebaumsworld.com/mediaFiles/picture/730195/86187705.jpg"
};

const event = {
  name: "Lorem ipsum dolor sit amet",
  img: "https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg",
  description: "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor. Nulla sit amet ullamcorper ipsum. Vivamus vestibulum massa tortor, at luctus leo auctor ac. Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tempor sapien at faucibus mattis. Quisque venenatis tellus sed diam facilisis tempor. Vivamus ut mi at quam ultricies posuere. Maecenas in ipsum id quam maximus faucibus.",
  tags: ["Activism", "#TimeForChange"],
  date: "Sunday, May 25, 2020",
  time: "8:00 AM - 12:00 PM",
  location: "Washington Square Park"
}

let postData = {
  content: "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor. Nulla sit amet ullamcorper ipsum. Vivamus vestibulum massa tortor, at luctus leo auctor ac. Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tempor sapien at faucibus mattis. Quisque venenatis tellus sed diam facilisis tempor. Vivamus ut mi at quam ultricies posuere. Maecenas in ipsum id quam maximus faucibus.",
  time: new Date("August 25, 2020 03:24:00"),
  imgs: ["https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg", "https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg","https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg"],
  //video: "https://www.youtube.com/embed/ttIWUvxnuEo",
  stats: {likes: 162, reposts: 38, comments:52, favorites: 123}
}


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
        {/* <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );

}




const Playground = (props) => {
  const [show, setShow] = useState(false);
  const[showJoke, setJoke]=useState(false);

  

  return (
    <Container>
  
      <Jumbotron>
        <DisplayEvent event={event} profile={amonteProfile}/>
        <h1 className="header">TurnUp React Playground</h1>
        <ToastWrapper title="Welcome!">
        <span role="img" aria-label="tada">
          🎉 🎉 🎉 🎉
        </span>
        <Icon color={"gray"}
            onClick={() => {alert("icon click") }}>
              <BsFillAlarmFill /></Icon>
        </ToastWrapper>
        <Row className='justify-content-center'>
                <ConfirmModal header={"Post Successful!"} content="Lorem ipsum ...." />
        </Row>

        <Counter></Counter>
        <Container>
          <Row>
            <Col><MissionsCarousel items={items} header={"Welcome to Turnup!"}></MissionsCarousel></Col>
            <Col><div>Login Component</div></Col>
          </Row>
        </Container>
        <Container>
          
         <DisplayPost post={postData} profile={amonteProfile}/>
        <CreatePost profile={amonteProfile}/>
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