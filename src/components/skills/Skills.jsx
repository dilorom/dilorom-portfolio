import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import SkillIcon from "./SkillIcon";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaBrain, 
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { 
      icon: FaHtml5, 
      label: "HTML5", 
      glowStyles: "border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
    },
    { 
      icon: FaCss3Alt, 
      label: "CSS3", 
      glowStyles: "border-purple-500/20 text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]" 
    },
    { 
      icon: FaJsSquare, 
      label: "JavaScript", 
      glowStyles: "border-pink-500/20 text-pink-400 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]" 
    },
    { 
      icon: FaReact, 
      label: "React", 
      glowStyles: "border-amber-500/20 text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
    },
    { 
      icon: FaNodeJs, 
      label: "Node.js", 
      glowStyles: "border-emerald-500/20 text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]" 
    },
    { 
      icon: FaGitAlt, 
      label: "Git", 
      glowStyles: "border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
    },
    { 
      icon: FaPython, 
      label: "Python", 
      // Base border is light blue, hover changes to a bright blue border with a dual-tint shadow blend!
      glowStyles: "border-sky-500/20 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]",
      isPython: true // We'll pass a custom flag down to override the icon color specifically
    },
    { 
      icon: FaDatabase, 
      label: "Databases", 
      glowStyles: "border-purple-500/20 text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]" 
    },
    { 
      icon: FaBrain, 
      label: "Generative AI", 
      glowStyles: "border-amber-500/20 text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
    },
  ];

  return (
    // Set background to dark slate to match the rest of the neon layout
    <SectionWrapper id="skills" className="bg-slate-950 text-white py-16">
      <AnimatedText text="My Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10 px-4">
        {skills.map((skill, index) => (
          <SkillIcon 
            key={index} 
            icon={skill.icon} 
            label={skill.label} 
            glowStyles={skill.glowStyles} 
            isPython={skill.isPython}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;