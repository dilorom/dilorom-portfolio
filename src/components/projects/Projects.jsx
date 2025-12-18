import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Movie App",
      description:
        "Movie App – A React-based web app to browse and search movies using the TMDB API. Features dynamic movie listings, ratings, and responsive design, showcasing modern React skills and API integration.",
      github: "https://github.com/dilorom/Movie_app",
      demo: "", // You can fill demo URL later
    },
    // Add more projects here
    {
      title: "Poker Card Generator",
      description:
        "A fun and interactive poker card generator built with HTML, CSS, and JavaScript. It randomly displays a poker card on each page load. DOM manipulation, dynamic UI updates, and responsive front-end design.",
      github: "https://github.com/dilorom/PokerCardGenerator",
      demo: "", // You can fill demo URL later
    },
    {
      title: "Caesar Cipher",
      description:
        "Caesar Cipher – A lightweight tool that encrypts and decrypts messages using the classic Caesar cipher technique.",
      github: "https://github.com/dilorom/ceasar-cipher",
      demo: "", // You can fill demo URL later
    },
  ];

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-900">
      
      <AnimatedText text="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
