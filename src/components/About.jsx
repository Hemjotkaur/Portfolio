import { SiCodechef } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-500 pb-2">
            About Me
          </p>
        </div>

        {/* About Content */}
        <p className="text-xl leading-9 text-gray-300 mt-6">
          Hi, I'm <span className="font-bold text-violet-400">Hemjot Kaur</span>
          , a Computer Science and Engineering graduate and aspiring Full Stack
          MERN Developer. I enjoy building modern, responsive, and scalable web
          applications that solve real-world problems and deliver excellent user
          experiences.
        </p>

        <p className="text-xl leading-9 text-gray-300 mt-8">
          My primary expertise lies in JavaScript, React, Node.js, Express.js,
          and MongoDB. I focus on writing clean, maintainable code and
          developing applications using industry-standard practices. Through
          personal projects, I have gained hands-on experience in frontend
          development, backend APIs, authentication, database design, payment
          integration, and full-stack application architecture.
        </p>

        <p className="text-xl leading-9 text-gray-300 mt-8">
          I am continuously learning new technologies, improving my development
          workflow, and expanding my knowledge of modern software development.
          My goal is to become a highly skilled software engineer capable of
          building production-ready applications and contributing to impactful
          products at scale.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-white py-20">
        <h2 className="text-6xl font-light tracking-wide mb-6">FIND ME ON</h2>

        <p className="text-2xl text-gray-300 mb-12">
          Feel free to <span className="text-violet-400">connect</span> with me
        </p>

        <div className="flex items-center gap-8">
          <a
            href="https://https://github.com/Hemjotkaur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-violet-700 text-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hemjot-kaur-614735246/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-violet-700 text-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/hem__kaur/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-violet-700 text-3xl hover:-translate-y-1 transition-all duration-300"
          >
            <BiLogoInstagramAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
