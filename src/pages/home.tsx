//src/pages/Home.tsx
import "../style.css"; // Import the CSS file
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
library.add(fab, fas);

const Home = () => {
  return (
    <div className="Raleway-font">
      <main className="layout">
        <header className="header1">Shamil Auwal</header>
        <div className="navpanel">
          <div>
            <Link to="/"> Home </Link>
          </div>
          <div>
            <Link to="/projects"> Projects </Link>
          </div>
        </div>
        <div className="job-title">
          <h2>Software Engineer</h2>
        </div>
        <div>
          <h3 className="skills-title">Skills</h3>
          <ul className="skills">
            <li>.NET</li>
            <li>React</li>
            <li>Angular</li>
            <li>Mathematics</li>
            <li>Teaching</li>
          </ul>
        </div>
        <div className="about-me">
          <h3>About Me</h3>
          <p className="about-me-text">
            Self-taught end-to-end developer with a passion for building and deploying web applications from the ground up. 
            From designing intuitive user interfaces to managing backend servers and ensuring robust security.
            My approach combines creativity with technical expertise, allowing me to bring ideas to life efficiently and precisely.
          </p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="nav-github">
            <a href="https://github.com/sdzuo">
              <FontAwesomeIcon icon={["fab", "github-alt"]} /> Github
            </a>
          </div>
          <div className="nav-LinkedIn">
            <a href="https://www.linkedin.com/in/shamil-al/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
            </a>
          </div>
          <div className="nav-resume">
            <a href="https://docs.google.com/document/d/1o0O9I6fcGqpV5mmxDO4cmy5v5ys82YHzJC4-Px4eJlk/edit?usp=sharing">
              <FontAwesomeIcon icon="graduation-cap" /> Resume
            </a>
          </div>
          <div className="nav-email">
            <a href="mailto: sdzuojp@gmail.com">
              <FontAwesomeIcon icon="envelope-square" /> Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
