import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-900">
      <AnimatedText text="About Me" />

      <div className="max-w-3xl mx-auto mt-12">
        {/* Glow frame */}
        <div className="glow-card rounded-2xl p-[2px]">
          {/* Inner readable surface */}
          <div
            className="
              relative z-10 rounded-2xl
              bg-white dark:bg-slate-800
              px-8 py-7
              text-center text-lg
              leading-relaxed
              text-gray-800 dark:text-gray-200
            "
          >
            {/* Profile Image */}
            <img
              src="/profile.jpg" // ✅ Correct path for public folder
              alt="Dilorom"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-light dark:border-accent-dark object-cover"
            />

            <p className="max-w-2xl mx-auto">
              I am a Web Designer, IT Specialist, and Software Developer with a strong
              background in cybersecurity, academic research, and software engineering.
              I combine technical expertise with creative problem-solving to deliver
              secure, intuitive, and visually engaging digital solutions.
              <br /><br />
              Outside of work, I enjoy hiking in high mountains, video editing, and taking amazing photos.
              Fun fact: I’ve completed a few sewing projects that I’m really proud of.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
