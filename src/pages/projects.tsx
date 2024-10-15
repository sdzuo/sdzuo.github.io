import "../style.css";
import { Link } from "react-router-dom";
import demovid from "../assets/URLgoat-demo.mp4";
import HoverVideo from "@/Components/HoverVideo";
import soon from "../assets/comingsoon.jpg";


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
          <a> (.NET, Angular, SQL Server, Docker)</a>
        </div>
        <div>
          <a href="https://github.com/sdzuo/goaturl">
            <HoverVideo
              src= {demovid}
              width="480px"
              height="320px"
            />
          </a>
        </div>
        <div>
          <a className ="project-title" href ="https://spicybengal.com">
            Full Stack Recipe Website - "Spicy Bengal"
          </a>
        </div>
          <a> (Penpot, React, .NET, SQL Server, Docker, Nginx)</a>
        <div>
          <a href ="https://spicybengal.com">
            <img alt="the website is coming soon" className = "soon"
              src= {soon}
              width="450px"
              height="300px"
            />
          </a>
        </div>
      </main>
    </body>
  );
};

export default Projects;
