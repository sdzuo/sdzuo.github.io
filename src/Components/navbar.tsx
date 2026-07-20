import { NavLink } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="brand" aria-label="Shamil Auwal, home">
          <span className="brand__mark">SA</span>
          <span className="brand__name">Shamil Auwal</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
