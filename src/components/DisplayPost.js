/**
 * @file DisplayPost
 * @author - Sonia Saitawdekar
 */

import React, {useState} from 'react';
import { Container, Row, Col, ResponsiveEmbed, Button } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import {HiDotsHorizontal, HiThumbUp, HiAnnotation, HiFlag, HiReply} from "react-icons/hi";
import Iframe from 'react-iframe';
import '../styles/DisplayPost.css';


const ActionRow = ({post,user}) => {

  //state
  const [liked,toggleLike] = useState(false)
  const [activeAction, setActiveAction] = useState("none")

  const likePost = () =>
  {

    console.log(`On->PostLikeToggle`,{post:post,user:user});
    toggleLike(!liked);
  }

  const onActiveActionChange = (action) => {
    console.log(`On->ActiveActionChange`, action);
    setActiveAction(action);
  }

 return ( <Row className="action-row">
          <Col>
          {/** Will probably create a component */}
          {/*<IconButton> */}
          <Button variant="Light"
            onClick={() => {likePost();}} >
              <HiThumbUp className={liked ? "active" : ""} /></Button>
              {/** </IconButton> */}
          </Col>
          <Col>
          <Button  variant="Light"
            onClick={() => { onActiveActionChange("comment") }}>
              <HiAnnotation className={activeAction === "comment" ? "active" : ""} /></Button>
          </Col>
          <Col>
          <Button  variant="Light"
            onClick={() => { onActiveActionChange("flag") }}>
              <HiFlag className={activeAction === "flag" ? "active" : ""} /></Button>
          </Col>
          <Col>
          <Button  variant="Light"
            onClick={() => { onActiveActionChange("share") }}>
              <HiReply className={activeAction === "share" ? "active" : ""} /></Button>
          </Col>
        </Row>)
}

const DisplayPost = ({post, profile}) => {


  // Format the images if given, otherwise format the video if given
  const renderedMedia = [];
  if (post.imgs) {
    let width = 12 / ((post.imgs.length % 4 === 0) ? 4 : post.imgs.length % 4);
    post.imgs.map((img, i) =>{
      return <Col key={i} xs={width === 12 ? width : 6} md={width} className="media-col"><img src={img} alt="post media"/></Col>;
    }).forEach(imgCol => {renderedMedia.push(imgCol)});

  } else if (post.video) {
    renderedMedia.push(<Col xs={12} className="media-col"><ResponsiveEmbed aspectRatio="16by9"><Iframe src={post.video} title="post media" allowFullScreen/></ResponsiveEmbed></Col>);
  }

  /**
   * Returns days, hours, and minutes since post was posted
   * @param {Date} time - Date of post
   */
  function calculateTimeSince(time) {
    let seconds = Math.floor(((new Date()) - time) / 1000);
    let days = Math.floor(seconds / (60 * 60 * 24));
    seconds = seconds % (60 * 60 * 24);
    let hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    let minutes = Math.floor(seconds / 60);
     return days + "d " + hours + "h " + minutes + "m";
  }



  return (
      <Container className="post">
        <Row className="media">
          {renderedMedia}
        </Row>
        <Row>
          <Col xs={10}>
            <PeopleComponent profile={profile}/>
          </Col>
          <Col xs={2}>
            <HiDotsHorizontal className="dots"/>
          </Col>
        </Row>
        <hr/>
        <Row className="time">
          <Col>
            <p>{calculateTimeSince(post.time)}</p>
          </Col>
        </Row>
        <Row className="content">
          <Col>
            <p>{post.content}</p>
          </Col>
        </Row>
        <Row className="stats">
          <Col>
            <p><span><HiThumbUp/></span>{post.stats.likes}</p>
            <p><span><HiAnnotation/></span>{post.stats.reposts}</p>
            <p><span><HiFlag/></span>{post.stats.comments}</p>
            <p><span><HiReply/></span>{post.stats.favorites}</p>
          </Col>
        </Row>
        <hr/>
        <ActionRow post={post.id} user={profile.id}></ActionRow>
      </Container>
  );
};

export default DisplayPost;