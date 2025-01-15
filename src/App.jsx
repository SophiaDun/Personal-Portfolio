import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Logo from "./assets/logo-white.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Router basename="/Personal-Portfolio/">
      <nav className="navbar">
        <div className="navLogo">
          <img src={Logo} alt="Logo" />
        </div>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        <ul className={`navLinks ${isMenuOpen ? "open" : ""}`}>
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home">ABOUT</a>
          </li>
          <li className={activeSection === "portfolio" ? "active" : ""}>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">CONTACT</a>
          </li>
        </ul>
      </nav>
      <main className="mainContainer">
        <section id="home">
          <Main />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </Router>
  );
}

export default App;
