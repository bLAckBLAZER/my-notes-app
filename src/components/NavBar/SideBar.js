import "./SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

export const SideBar = ({
  setShowSideBar,
  userLogout,
  dispatchData,
  dispatchAuth,
  authState,
}) => {
  const navigate = useNavigate();

  return (
    <div className="modal-container">
      <aside className="mob-aside" onClick={() => setShowSideBar(false)}>
        <div className="side-bar-item">
          <MdClose size={20} onClick={() => setShowSideBar(false)} />
        </div>
        <div className="side-bar-item">
          <Link to="/home">Home</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/archive">Archive</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/trash">Trash</Link>
        </div>
        <div className="side-bar-item" style={{ justifySelf: "flex-end" }}>
          {authState.token ? (
            <div
              onClick={() => userLogout(dispatchAuth, dispatchData, navigate)}
            >
              Logout
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </aside>
    </div>
  );
};
