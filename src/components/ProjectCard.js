import "./ProjectCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";
import photo1 from "../assets/screenshot1.png";
import photo2 from "../assets/screenshot2.png";
import photo3 from "../assets/screenshot3.png";
import photo4 from "../assets/screenshot4.png";
import photo5 from "../assets/screenshot5.png";

const ProjectCard = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="project-heading">
      <div className="project-container">
        <div className="project-card">
          <img src={photo1} alt="site1" />
          <h2 className="project-title">Split-bills</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://split-bills-with-friends.netlify.app")
                }
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://github.com/iliko13/Split_Bills.git")
                }
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={photo2} alt="site1" />
          <h2 className="project-title">MaxShaurma</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink
                role="link"
                onClick={() => openInNewTab("https://max-shaurma.netlify.app")}
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://github.com/iliko13/MaxShaurma.git")
                }
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={photo3} alt="site1" />
          <h2 className="project-title">Movies</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://movies-rating-web-site.netlify.app")
                }
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://github.com/iliko13/MovieApp")
                }
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={photo4} alt="site1" />
          <h2 className="project-title">Travel</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://world-map-travel.netlify.app")
                }
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://github.com/iliko13/WorldTravel.git")
                }
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={photo5} alt="site1" />
          <h2 className="project-title">Dog-site</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab("https://dog-bootstrap-mila-site.netlify.app")
                }
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://github.com/iliko13/Bootstrap2-Mila-.git"
                  )
                }
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
