import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demovid from "../assets/URLgoat-demo.mp4";
import HoverVideo from "@/Components/HoverVideo";
import soon from "../assets/Spicybengal.png";

const Projects = () => {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "1.5rem" }}>
        <div className="container">
          <p className="eyebrow">Selected work</p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)" }}>Projects</h1>
          <p className="hero__lead" style={{ marginBottom: 0 }}>
            A collection of full-stack applications I&apos;ve designed, built, and shipped.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          <div className="projects-list">
            {/* URL Shortener */}
            <article className="project-card">
              <div className="project-card__body">
                <h3>
                  <a href="https://github.com/sdzuo/goaturl">URL Shortener</a>
                </h3>
                <p className="project-card__desc">
                  A fast, self-hosted link shortener with a clean dashboard for creating and
                  tracking short links.
                </p>
                <div className="tech-row">
                  <span className="tech-tag">.NET</span>
                  <span className="tech-tag">Angular</span>
                  <span className="tech-tag">SQL Server</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <a className="project-link" href="https://github.com/sdzuo/goaturl">
                  <FontAwesomeIcon icon={["fab", "github-alt"]} /> View on GitHub
                </a>
              </div>
              <a
                className="project-card__media"
                href="https://github.com/sdzuo/goaturl"
                aria-label="URL Shortener demo"
              >
                <HoverVideo src={demovid} width="100%" height="260px" />
              </a>
            </article>

            {/* Spicy Bengal */}
            <article className="project-card">
              <div className="project-card__body">
                <h3>
                  <a href="https://spicybengal.com">Spicy Bengal</a>
                </h3>
                <p className="project-card__desc">
                  A full-stack recipe website featuring a custom-designed interface and a
                  containerized .NET backend served behind Nginx.
                </p>
                <div className="tech-row">
                  <span className="tech-tag">Penpot</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">.NET</span>
                  <span className="tech-tag">SQL Server</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Nginx</span>
                </div>
                <a className="project-link" href="https://spicybengal.com">
                  <FontAwesomeIcon icon="arrow-up-right-from-square" /> Visit site
                </a>
              </div>
              <a
                className="project-card__media"
                href="https://spicybengal.com"
                aria-label="Spicy Bengal website"
              >
                <img alt="Spicy Bengal website, coming soon" src={soon} />
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
