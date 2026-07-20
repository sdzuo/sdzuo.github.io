import Navbar from "./Components/navbar";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__inner container">
          <span>© {new Date().getFullYear()} Shamil Auwal. Built with React.</span>
          <div className="footer__links">
            <a href="https://github.com/sdzuo" aria-label="GitHub">
              <FontAwesomeIcon icon={["fab", "github-alt"]} />
            </a>
            <a href="https://www.linkedin.com/in/shamil-al/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="mailto:sdzuojp@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
