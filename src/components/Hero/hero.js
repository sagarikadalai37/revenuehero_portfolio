import React from "react";
import "./hero.css";

import profile from "../assets/profile.jpg";



const About = () => {
  return (
    <header className="header" id="home">
        <div className="image-area">
        <img src={profile} alt="Sagarika" />
        </div>
       <div className="header-header">
        <div className="header-title">
          <h5>Hello I'm</h5>
          <h1>Sagarika Dalai</h1>
          <small>Web Developer</small>
          <h2>Hi, I'm a very ambitious Web Developer looking for a role in an established IT company with the opportunity to work with the technologies on challenging and diverse projects. I am Self Motivated and hardworking person in my career. I am always energetic and eager to learn a new skills.</h2>
        </div>
    
        </div>
     
      
    </header>
  );
};

export default About;
