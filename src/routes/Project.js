import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectComp from "../components/ProjectComp";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 />
      <ProjectCard />
      <ProjectComp />
      <Footer />
    </div>
  );
};

export default Project;
