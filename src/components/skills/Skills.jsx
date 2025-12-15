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
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, label: "HTML5" },
    { icon: FaCss3Alt, label: "CSS3" },
    { icon: FaJsSquare, label: "JavaScript" },
    { icon: FaReact, label: "React" },
    { icon: FaNodeJs, label: "Node.js" },
    { icon: FaGitAlt, label: "Git" },
    { icon: FaDatabase, label: "Databases" },
  ];

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-slate-900">
      
      <AnimatedText text="My Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
        {skills.map((skill, index) => (
          <SkillIcon key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
