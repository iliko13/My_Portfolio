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
            <p>
              Experience hassle-free bill sharing and simplified expense
              division with our innovative split bill website, ensuring seamless
              and equitable distribution of costs among friends and groups.
            </p>
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
            <p>
              Embark on a tantalizing culinary journey as our shawarma site
              introduces you to a delectable array of perfectly seasoned,
              mouthwatering wraps and flavors that transport you to the heart of
              Middle Eastern cuisine.
            </p>
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
            <p>
              Immerse yourself in the world of cinema and engage with your
              favorite films on a deeper level through our movie app, empowering
              you to rate and score movies while connecting with a community of
              fellow cinephiles.This is Text
            </p>
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
            <p>
              Explore the breathtaking diversity of our planet through an
              interactive world map site that offers a captivating visual
              journey across continents, cultures, and geographical wonders.
            </p>
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
            <p>
              Embark on a tail-wagging adventure as our dog site celebrates the
              boundless charm of man's best friend, offering a delightful hub
              for canine enthusiasts to discover heartwarming stories, expert
              care tips, and a paw-sitively adorable gallery of furry
              companions.
            </p>
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
