import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "React API Project",
      description:
        "This project uses a real-world API to fetch and display data while covering important React components and features.",
      github: "https://github.com/dilorom",
      demo: "", // You can fill demo URL later
    },
    // Add more projects here
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
