import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work1 from "../assets/work1.jpg";
import Work2 from "../assets/work2.jpg";
import Work3 from "../assets/work3.jpg";
import Work4 from "../assets/work4.jpg";
import Work5 from "../assets/work5.jpg";
import Work6 from "../assets/work6.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "Hyvä Tapa Harrastaa",
      description: "Teamwork commission: The renewal of the hooteehoo.org website, implemented using HTML, CSS, and JavaScript technologies. Usability analysis of the website and transforming detail-by-detail mobile first website. Shell scripts to master the whole content. The project included designing a new user interface and updating the graphics.",
      link: "http://www.hooteehoo.org/indexfi.html",
      image: Work1,
      type: "live",
    },
    {
      name: "Kittydoll",
      description: "A dressup/avatart maker made with React js, deployed on githubpages. All artwork was drawn on Adobe Photoshop",
      link: "https://sophiadun.github.io/kittydoll/#/selection",
      image: Work2,
      type: "live",
    },
    {
      name: "Omppu ja Rane verkkokauppa",
      description: "A full-stack team project for a pet supplies store, with the backend built using Spring Boot and the frontend developed with React JS. The application manages information about products, customers, orders, and manufacturers, and functions behind the scenes to support the pet supplies store.",
      link: "https://github.com/SyntaxSynergy/k24TiimiNROBackEnd",
      image: Work5,
      type: "github",
    },
    {
      name: "Guess the flag",
      description: "Educational React Native/ Expo application that challenges users to identify country flags fetched from the restcountries API. It incorporates Firebase for authentication, real-time database functionalities, and persistent storage, and it provides a user-friendly interface with animations and a leaderboard system.",
      link: "https://github.com/SophiaDun/GuessTheFlag",
      image: Work3,
      type: "github",
    },
    {
      name: "Personal trainer",
      description: "A personal trainer application for managing user data via an API. The app allows you to add users to training sessions, view upcoming sessions on the calendar, and export data to CSV for easy viewing and analysis. Built with React JS, the application utilizes an API to fetch and add user information seamlessly.",
      link: "https://github.com/SophiaDun/PersonalTrainer",
      image: Work4,
      type: "github",
    },
    {
      name: "Trivia game",
      description: "Quiz Application built with Spring Boot, providing user authentication, quiz functionality, and score tracking. The application was deployed on Heroku using a PostgreSQL database.",
      link: "https://github.com/SophiaDun/quiz-app-public",
      image: Work6,
      type: "github",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow"
        onClick={onClick}
      >
        ❮
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow"
        onClick={onClick}
      >
        ❯
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="com material-symbols-outlined">computer</span>
          <h2 className="portfolioTitle">SELECTED WORKS</h2>
        </div>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  {project.type === "live" ? "View site" : "View on GitHub"}
                </a>
                <br />

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
