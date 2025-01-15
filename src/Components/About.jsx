import React from "react";
import LinkedInLogo from "../assets/linkedin-logo.png"; 
import GitHubLogo from "../assets/github-logo.png"; 

const About = () => {
  return (
    <section id="about">
          <div className="vertical-line"></div>
          <div className="mainBox">
          <div className="introContainer">
          <span className="com material-symbols-outlined">person_pin_circle</span>
      <h2>Contact me</h2>
      <p>
      Feel free to reach out if you're interested in collaborating, have a project in mind, or just want to say hello! I’m always excited to connect and explore new opportunities.
      </p>
      <hr className="hr" />

      <div className="socialLinks">
            <a className="socialLogo"
              href="https://www.linkedin.com/in/sophia-dunkley-4557b6342/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="LinkedIn" className="socialLogo" />
            </a>
            <a className="socialLogo"
              href="https://github.com/SophiaDun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubLogo} alt="GitHub" className="socialLogo" />
            </a>
          </div>
      </div>
      </div>
    </section>
  );
};

export default About;
