/**
 * @file CreatePost Component
 * @author Shayan A.
 */




import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import '../styles/CreatePost.css'
import PeopleComponent from './PeopleComponent'


const CreatePost = ({callback, profile}) => {

  //state
  const [eventsToggled, toggleEventPost] = useState(true);
  const [data, setData] = useState({});

  const _callback = callback;

  /**
   * Placeholder function.
   * @param {function} callback - Executed after successful submission
   */
  function submitData(callback) {
    console.log(`Create ${eventsToggled ? "event" : "post"}`, data);
    if(_callback)  _callback(data);
  }

  /**
   * Placeholder function.
   * @param {string} text
   */
  function updateAboutField(text) {
    data.descrption = text;
    setData(data)
  }

  return (
      <Container className='create-post-wrapper'>
          <Container>
            <Row>
            <Col>
              <PeopleComponent profile={profile}/>
            </Col>
            <Col lg={6} xs={6}>
              <Button className="create-events-btn float-right" onClick={() => toggleEventPost(!eventsToggled)}>+ Create {eventsToggled ? "Event" : "Post" } </Button>
            </Col>
           </Row>



          </Container>
      <Form.Group>
        <Form.Control as="textarea" placeholder="What's on your mind?" rows="3" onChange={(event)=> updateAboutField(event.target.value)} />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col><i>picture</i>
            <i>video</i>
            <i>document</i></Col>
          <Col xs={6}> <Button className="create-post-btn float-right col-3" onClick={()=> submitData() } >Ok</Button> </Col>
        </Row>

      </Form.Group>

      </Container>
  );
};

export default CreatePost;