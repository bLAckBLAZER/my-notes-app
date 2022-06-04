import { Audio } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <Audio height="100" width="100" color="grey" ariaLabel="loading" />
      </div>
    </div>
  );
};
