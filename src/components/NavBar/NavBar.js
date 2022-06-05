import "../../styles/navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import { userLogout } from "../../utils/authenticationCalls";
import { Hamburger } from "../Hamburger/Hamburger";
import { SideBar } from "./SideBar";

export const NavBar = ({ title, logo }) => {
  const { authState, dispatchAuth } = useAuth();
  const [showSideBar, setShowSideBar] = useState(false);
  const { dispatchData } = useData();

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
              onClick={() => userLogout(dispatchAuth, dispatchData, navigate)}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </li>
        <Hamburger onClickAction={() => setShowSideBar(!showSideBar)} />
      </ul>
      {showSideBar && (
        <SideBar
          setShowSideBar={setShowSideBar}
          userLogout={userLogout}
          dispatchData={dispatchData}
          dispatchAuth={dispatchAuth}
          authState={authState}
        />
      )}
    </nav>
  );
};
