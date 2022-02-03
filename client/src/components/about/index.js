import React from "react";
import "./style.css";
import hugo from "../../media/HugoProfile.jpg"


const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p className="">
          I'm a professional with over 10 years experience
          in broadcasting, voice-over, and bringing to life
          any kind of content.

          I've worked in radio stations, I've gave voice to 
          animation characters, I've been the voice of many
          institutional and educational videos.

          On this page, you'll find some of my work.
          </p>
          <p>
        My name is Hugo Silva... and this is my voice! 
        </p>
      </div>
      <div className="about-img">
        <img
          src={hugo}
          alt="about"
          className="profile-pic"
        />
      </div>
    </div>
  );
};

export default About;

