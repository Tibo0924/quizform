import React from 'react';
import { v1 } from 'uuid';
import './style.css';

const imageMap = [
  {
    title: 'Natural play',
    src: 'Natural_play.png'
  },
  {
    title: 'Creative play',
    src: 'Creative_play.png'
  },
  {
    title: '0-4 young play',
    src: '0-4_young_play.png'
  },
  {
    title: '5-11 older children play',
    src: '5-11_older_children_play.png'
  },
  {
    title: 'Exercise/gym equipment',
    src: 'Exercise-gym_equipment.png'
  },
  {
    title: 'All age play',
    src: 'All_age_play.png'
  },
];

const Images = () => {
  const imageBlocks = imageMap.map((image) => {
    return (
      <div
        className="single_image"
        key={v1()}
      >
        <img 
          src={`/img/${image.src}`}
          alt="square"
          className="img"
        />
        <p className="imageName">{image.title}</p>
      </div>
    )
  });

  return (
    <div className="main">
      <h3>Which of these would you like to see in a public space?</h3>
      <div className="image_collection">
        {imageBlocks}
      </div>
    </div>
  )
};

export default Images;