import "./ProjectCompStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days - </p>
          <p>- 3 Pages -</p>
          <p>- Featured - </p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            BUY NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 2 Days - </p>
          <p>- 5 Pages -</p>
          <p>- Featured - </p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            BUY NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 Days - </p>
          <p>- 9 Pages -</p>
          <p>- Featured - </p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
