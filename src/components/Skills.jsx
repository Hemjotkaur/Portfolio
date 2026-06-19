import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 className="text-7xl text-white" />,
    },
    {
      id: 2,
      icon: <FaCss3Alt className="text-7xl text-white" />,
    },
    {
      id: 3,
      icon: <IoLogoJavascript className="text-7xl text-white" />,
    },
    {
      id: 4,
      icon: <SiTypescript className="text-7xl text-white" />,
    },
    {
      id: 5,
      icon: <FaReact className="text-7xl text-white" />,
    },
    {
      id: 6,
      icon: <SiNextdotjs className="text-7xl text-white" />,
    },
    {
      id: 7,
      icon: <RiTailwindCssFill className="text-7xl text-white" />,
    },
    {
      id: 8,
      icon: <FaNodeJs className="text-7xl text-white" />,
    },
    {
      id: 9,
      icon: <SiExpress className="text-7xl text-white" />,
    },
    {
      id: 10,
      icon: <SiMongodb className="text-7xl text-white" />,
    },
    {
      id: 11,
      icon: <FaGitAlt className="text-7xl text-white" />,
    },
  ];

  const tools = [
    {
      id: 1,
      icon: <VscVscode className="text-7xl text-white" />,
    },
    {
      id: 2,
      icon: <SiPostman className="text-7xl text-white" />,
    },
    {
      id: 3,
      icon: <SiGithub className="text-7xl text-white" />,
    },
    {
      id: 4,
      icon: <SiVercel className="text-7xl text-white" />,
    },
  ];

  return (
    <div className="w-full min-h-screen pt-24 py-20">
      <div className="max-w-7xl mx-auto px-6 text-white">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-center">
            Professional{" "}
            <span className="text-violet-400">Skillset</span>
          </h2>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map(({ id, icon, title }) => (
            <div
              key={id}
              className="
                h-44
                rounded-lg
                border
                border-violet-500/70
                bg-[#0a061a]/60
                backdrop-blur-sm
                flex
                flex-col
                items-center
                justify-center
                gap-5
                transition-all
                duration-300
                hover:scale-105
                hover:border-violet-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
              "
            >
              {icon}
              <p className="text-lg font-medium text-gray-200">
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Row */}
         <div className="mb-14">
          <h2 className="text-5xl font-bold text-center">
            Tools
            <span className="text-violet-400">I Use</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ">
          {tools.map(({ id, icon, title }) => (
            <div
              key={id}
              className="
                h-44
                rounded-lg
                border
                border-violet-500/70
                bg-[#0a061a]/60
                backdrop-blur-sm
                flex
                flex-col
                items-center
                justify-center
                gap-5
                transition-all
                duration-300
                hover:scale-105
                hover:border-violet-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
              "
            >
              {icon}
              <p className="text-lg font-medium text-gray-200">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;