import React from "react";
import "./style.css";
import coverVideo from "../../media/VoxStory.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Hugo Silva</h1>
      <p>| Voice Talent |</p>
    </div>
  );
};

export default Cover;