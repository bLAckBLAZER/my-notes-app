import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { userLogout } from "../../utils/authenticationCalls";
export const NavBar = ({ title, logo }) => {
  const { authState, dispatchAuth } = useAuth();

  const navigate = useNavigate();

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
          {authState.token ? (
            <button
              className="btn btn-primary"
              onClick={() => userLogout(dispatchAuth, navigate)}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
