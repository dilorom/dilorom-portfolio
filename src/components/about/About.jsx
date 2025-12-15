import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-900">
      
      <AnimatedText text="About Me" />

      <p className="
        max-w-3xl mx-auto text-center text-lg leading-relaxed
        text-gray-700 dark:text-gray-300
      ">
        I am a Web Designer, IT Specialist, and Software Developer with a strong
        background in cybersecurity, academic research, and software engineering.
        I combine technical expertise with creative problem-solving to deliver
        secure, intuitive, and visually engaging digital solutions.
        <br /><br />
        I’m constantly learning, improving, and ready for new responsibilities as
        I continue expanding my skills in React, UI/UX, cloud technologies, and
        modern web development.
      </p>
    </SectionWrapper>
  );
};

export default About;
