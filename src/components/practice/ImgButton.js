import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function ImgButton() {
  // images from open source database https://www.pexels.com/
  let dogImgs = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/1289555/pexels-photo-1289555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
  ];

  const [imgSrc, setImg] = useState("");

  function changeImg() {
    let img = document.getElementById("dogImg");
    if(imgSrc === "") {
      img.attributes.removeNamedItem("hidden");
    }
    let rand = Math.floor(Math.random() * dogImgs.length);
    setImg(dogImgs[rand]);
    img.src = imgSrc;
  }

  return (
      <Container>
          <Button onClick={changeImg}>
              Click To See a Random Dog
          </Button>
          <br/>
          <img id="dogImg" hidden src={imgSrc} alt="dog" />
      </Container>
  );
}

export default ImgButton;
