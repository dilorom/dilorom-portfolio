import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-900">
      {/* About Me Section */}
      <AnimatedText text="About Me" />

      <div className="max-w-3xl mx-auto mt-12">
        <div className="glow-card rounded-2xl p-[2px]">
          <div
            className="
              relative z-10 rounded-2xl
              bg-white/90 dark:bg-slate-800/90
              px-8 py-8
              text-center text-lg
              leading-relaxed
              text-gray-800 dark:text-gray-200
              shadow-lg
              space-y-4
            "
          >
            <p>
              I am a Web Designer, IT Specialist, and Software Developer with a strong background in cybersecurity, academic research, and software engineering.
              I combine technical expertise with creative problem-solving to deliver secure, intuitive, and visually engaging digital solutions.
            </p>
            <p>
              Outside of work, I enjoy exploring the great outdoors — I’m an experienced hiker and love trekking through high mountains with breathtaking scenery. I’m also passionate about video editing and capturing amazing photographs.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <br></br>
      <AnimatedText text="Education" />

      <div className="max-w-3xl mx-auto mt-12">
        <div className="glow-card rounded-2xl p-[2px]">
          <div
            className="
              relative z-10 rounded-2xl
              bg-white/90 dark:bg-slate-800/90
              px-8 py-8
              text-center text-lg
              leading-relaxed
              text-gray-800 dark:text-gray-200
              shadow-lg
              space-y-2
            "
          >
            <p>Master's and Bachelor's Degree in Information Security</p>
            <p>
               <a href="https://tuit.uz/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
          Tashkent University of Information Technologies </a>

            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
