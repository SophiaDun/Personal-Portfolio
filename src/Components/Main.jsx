import React from "react";
import Logo from "../assets/logo-black.png";
import ProfilePicture from "../assets/profile-picture.png";

const Main = () => {
  return (
    <section id="home">
      <div className="mainBox">
        <div className="banner">
          <div className="content">
            <img src={Logo} alt="logo" className="logo" />
            <p>P O R T F O L I O</p>
          </div>
        </div>

        <div className="introContainer">
          <div className="profilePicture">
            <img src={ProfilePicture} alt="profile" />
          </div>

          <div className="introTitle">
            <h1 className="name">SOPHIA DUNKLEY</h1>
            <p>Student / Full-Stack Developer</p>
          </div>

          <p className="introText">
            Hello, I'm Sophia, a passionate developer who loves building
            creative and impactful applications. Here, you'll find my personal
            projects and more about my journey.
          </p>

          <hr className="hr" />
          <h4 className="skills">SKILLS</h4>

          <div className="skillContainer">
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>JavaScript </li>
              <li>HTML, CSS</li>
               <li>Figma</li>
              <li>UI-design</li>
            </ul>
            <ul>
              <li>REST API</li>
              <li>Spring Boot</li>
              <li>Java</li>
              <li>Git & GitHub</li>
              <li>Scrum</li>
              <li>SQL basics</li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
    </section>
  );
};

export default Main;
