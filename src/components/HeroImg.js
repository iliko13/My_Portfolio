import "./HeroImgStyles.css";
import BackImg from "../assets/background.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={BackImg} alt="BackImg" />
      </div>

      <div className="content">
        <p>HI, I'M FREELANCER.</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
