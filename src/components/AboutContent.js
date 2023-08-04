import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          In my role as a React developer, I have adeptly navigated the realm of
          dynamic and responsive user interfaces. My proficiency in JavaScript,
          coupled with a design-driven mindset, empowers me to elegantly
          translate intricate concepts into functional components. Through
          collaborative project experiences and an unwavering commitment to
          staying at the forefront of React's rapid evolution, I am dedicated to
          consistently delivering seamless and captivating web experiences.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
