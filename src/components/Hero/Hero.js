import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = ({
  heroImage,
  titleFirstName,
  titleSecondName,
  desc1,
  desc2,
  desc3,
}) => {
  return (
    <div className="grid-40-60 flex-1">
      <div id="hero-nav" className="flex flex-col pd-x-3">
        <div className="hero-title">
          {titleFirstName}
          <span>{titleSecondName}</span>
        </div>
        <div className="hero-subtitle">{desc1}</div>
        <div className="hero-subtitle">
          <span>{desc2}</span>
        </div>
        <div className="h4">{desc3}</div>
        <Link to="/signup">
          <button className="btn btn-primary mg-y-2">Sign Up</button>
        </Link>
        <Link to="/login">Already have an account? Log in!</Link>
      </div>
      <div className="hero-img flex-1">
        <img src={heroImage} alt="hero img" className="img-res" />
      </div>
    </div>
  );
};
