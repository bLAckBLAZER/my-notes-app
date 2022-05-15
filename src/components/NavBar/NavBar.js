import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const NavBar = ({ title, logo }) => {
  return (
    <nav className="navbar fixed">
      <Link to="/">
        <div className="flex align-ctr justify-ctr">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-heading">{title}</div>
        </div>
      </Link>
      <ul className="nav-actions">
        <li className="nav-action-item">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
