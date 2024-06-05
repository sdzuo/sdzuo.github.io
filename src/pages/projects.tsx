import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import HoverVideo from "@/Components/HoverVideo";

const Projects = () => {
  return (
    <body className="Raleway-font">
      <main className="layout">
        <header>Projects</header>
        <div className="navpanel">
          <div>
            <Link to="/"> Home </Link>
          </div>
          <div>
            <Link to="/projects"> Projects </Link>
          </div>
        </div>
        <div>
          <a className="project-title" href="https://github.com/sdzuo/goaturl">
            URL Shortener
          </a>
        </div>
        <div>
          <a href="https://github.com/sdzuo/goaturl">
            <HoverVideo
              src="src/assets/URLgoat-demo.mp4"
              width="480px"
              height="320px"
            />
          </a>
        </div>
      </main>
    </body>
  );
};

export default Projects;
