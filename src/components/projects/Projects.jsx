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
      demo: "https://dilorom.github.io/Movie_app/", 
      image: "public/movie.webp",
      // Cyan Glow Theme
      glowStyles: "border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] text-cyan-400"
    },
    {
      title: "Poker Card Generator",
      description:
        "Poker Card Generator – A fun and interactive poker card generator built with HTML, CSS, and JavaScript. It randomly displays a poker card on each page load. DOM manipulation, dynamic UI updates, and responsive front-end design.",
      github: "https://github.com/dilorom/PokerCardGenerator", // Note: Ensure this link is updated later if needed!
      demo: "https://github.com/dilorom/PokerCardGenerator", 
      image: "public/poker.webp",
      // Purple Glow Theme
      glowStyles: "border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] text-purple-400"
    },
    {
      title: "GoDrive",
      description:
        "GoDrive – GoDrive is a cloud storage web application that allows users to securely upload, organize, and access files from anywhere. It features a clean, responsive interface designed for smooth navigation and efficient file management, showcasing strong skills in frontend development, API integration, and user-centered design.",
      github: "https://github.com/dilorom/godrive",
      demo: "https://dilorom.github.io/godrive/", 
      image: "Godrive.webp",
      // Pink Glow Theme
      glowStyles: "border-pink-500/20 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)] text-pink-400"
    },
    {
      title: "Caesar Cipher",
      description:
        "Caesar Cipher – A lightweight tool that encrypts and decrypts messages using the classic Caesar cipher technique.",
      github: "https://github.com/dilorom/ceasar-cipher",
      demo: "https://github.com/dilorom/ceasar-cipher",
      image: "",
      // Amber/Orange Glow Theme
      glowStyles: "border-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)] text-amber-400"
    },
  ];

  return (
    // Updated background to dark slate to match your footer's neon aesthetic
    <SectionWrapper id="projects" className="bg-slate-950 text-white py-16">
      
      <AnimatedText text="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          // Passing down the custom glow attributes alongside the other data
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;