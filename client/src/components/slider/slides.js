import React from "react";
import "./style.css";
import ReactPlayer from "react-player"

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2018/03/22/10/54/youtube-icon-3249999_1280.jpg",
    alt: "Project 1",
    desc: "Project 1",
    href: "https://www.youtube.com/watch?v=Rj_Ht2Lr7bM"
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;