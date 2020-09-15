/**
 * @file CreateAccount Component.
 * @author - Adil Merribi
 */
import React, { useState } from "react";
import { Button, FormControl, Col, Image, InputGroup, Container, Form, Row} from "react-bootstrap";

import userAdd from '../resources/userAdd.png'

function CreateAccount() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [referralcode, setReferralcode] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Snapchat, setSnapchat] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");

  const imgSource = image.preview ? image.preview : userAdd; 
  function validateForm() {
    return name.length > 0 && username.length > 0 && bio.length > 0 && bio.length <= 150;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }
  const handleChange = e => {
    console.log(`On->ProfileImageSelection`);
    if (e.target.files.length) {

      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  let self = {};  
  
  return (
<Form onSubmit={handleSubmit} > 
        <Form.Group as={Container}  >
          <Row className="justify-content-md-center">
            <Col xs={6} md={4} >
              {/** Image uploading will be replaced by a library */}
              <Image  width="206" height="206" roundedCircle style={{ border: "1px solid"}} 
              src={imgSource} onClick={() => {console.log(`On->ImageUploadClick`,self); self.fileUpload.click(); }}
              />
              <Form.File id="profileImgUpload" onChange={handleChange} hidden ref={(me)=>{self.fileUpload=me}} />
            </Col>      
          </Row>
        </Form.Group>

      <Form.Row>
          <Form.Group as={Col} controlId="name">
          <Form.Label>Name*</Form.Label>
          <FormControl   autoFocus placeholder="John Doe" size="lg" type="text"
              value={name} onChange={e => setName(e.target.value)}  />
          </Form.Group>
          <Form.Group as={Col} controlId="referralcode">
            <Form.Label>Referral Code</Form.Label>
          <FormControl size="lg"
              value={referralcode}
              onChange={e => setReferralcode(e.target.value)} />
          </Form.Group>
      </Form.Row>
      <Form.Row >
            <Form.Group as={Col} conrolId="username">
              <Form.Label>Username*</Form.Label>
              <FormControl type="text" placeholder="john_doe" size="lg"
              value={username}
              onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} conrolId="location">
              <Form.Label>Location</Form.Label>
              <FormControl type="number" size="lg"
              value={location}
              onChange={e => setLocation(e.target.value)} />
            </Form.Group>
      </Form.Row>
      
      <Form.Row >
            <Form.Group as={Col} controlId="bio">
              <Form.Label>Bio* (max 150)</Form.Label>
               <FormControl type="text" as="textarea" rows="8"
              value={bio}
              onChange={e => setBio(e.target.value)} />
            </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Social Media</Form.Label>
            <Form.Group as={Container} >
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fab fa-instagram"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Instagram" size="lg"
                  value={Instagram}
                  onChange={e => setInstagram(e.target.value)}  />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Container} >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fab fa-facebook"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text"placeholder="Facebook" size="lg"
                  value={Facebook}
                  onChange={e => setFacebook(e.target.value)} />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Container} >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fab fa-snapchat"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="Snapchat" size="lg"
                  value={Snapchat}
                  onChange={e => setSnapchat(e.target.value)} />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Container} >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fab fa-linkedin"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" placeholder="LinkedIn" size="lg"
                  value={LinkedIn}
                  onChange={e => setLinkedIn(e.target.value)} />
              </InputGroup>
            </Form.Group>
          </Form.Group>
      </Form.Row>
    
      <Form.Row >
        <Col  md={{ span: 6, offset: 3 }} style={{textAlign:"center"}}>
          <Button style={{width:"60%"}} size="lg" type="submit"
         disabled={!validateForm()} >Continue</Button></Col>
      </Form.Row>
    </Form> 
  );
}
export default CreateAccount;