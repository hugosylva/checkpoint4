import React from "react";
import "./style.css";
import {Carousel} from 'react-bootstrap';
import Youtube from "../../media//YouTube.mp4";
import Vox from "../../media//VoxStory.mp4";
import Vodafone from "../../media//Vodafone.mp4";
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css";

const Slider = () => {

  const videoProperties = [
    {
      id: 1,
      title: "Youtube",
      src: Youtube,
      credit: "ME"
    },
    {
      id: 2,
      title: "Vodafone",
      src: Vodafone,
      credit: "ME"
    },
    {
      id: 3,
      title: "Vox Story",
      src: Vox,
      credit: "ME"
    }
  ]
  return (
    <div className="carousel-container">
<Carousel>
{videoProperties.map((videoObj) =>{
  return (
    <Carousel.Item key={videoObj.id}>
      <ReactPlayer 
        url={videoObj.src}
        width="100%"
        pip={true}
        controls={true}
        playing={false}
      />
      <Carousel.Caption>
        <h3>{videoObj.title}</h3>
        <p>{videoObj.credit}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
})}

</Carousel>





      {/* <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      /> */}
    </div>
  );
};

export default Slider;