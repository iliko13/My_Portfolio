import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Home;
