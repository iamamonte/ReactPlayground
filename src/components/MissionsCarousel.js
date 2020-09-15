import React, {useState} from 'react';
import {Carousel,Container} from "react-bootstrap";
import '../styles/MissionsCarousel.css';

const MissionsCarousel = ({items,header}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {items.map((item, i) => (
            <Carousel.Item key={i}>
              <Container className='text-center'>
              <h2>{header}</h2>
              <p className="caption">{item.caption}</p>
              <div className='img-container'>
                <img src={item.img} alt={item.alt}/>
              </div>
              </Container>
            </Carousel.Item>
                  ))}
      </Carousel>
  );
};

export default MissionsCarousel;