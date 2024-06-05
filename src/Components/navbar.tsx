import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navpanel">
          <div>
            <Link to="/"> Home </Link>
          </div>
          <div>
            <Link to="/projects"> Projects </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
