import quickstay from "../assets/quickstay.png";
import portfolioimage from "../assets/portfolio1.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Projects = () => {
  const portfolio = [
    {
      id: 1,
      src: quickstay,
      title: "QuickStay",
      description:
        "Developed a full-stack hotel booking platform with secure authentication, room reservations, Stripe payment integration, booking management, and an admin dashboard for managing hotels, rooms, and bookings.",
      href: "https://quickstay-teal-eight.vercel.app/",
      link: "https://github.com/Hemjotkaur/Quick-Stay",
    },

    {
      id: 2,
      src: portfolioimage,
      title: "Portfolio",
      description:
        "Designed and developed a personal portfolio website to showcase my projects, skills, and experience.Implemented interactive animations, smooth navigation, and dynamic components to create an engaging user experience.",
      href: "https://hemjot-portfolio.vercel.app/",
      link: "https://github.com/Hemjotkaur/Portfolio",
    },
  ];

  return (
    <div name="projects" className="min-h-screen w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-10 pt-30 text-center">
          <p className="text-4xl font-bold">
            My Recent <span className="text-purple-500">Works</span>
          </p>
          <p className="py-2 text-gray-300">
            Here are a few projects I have worked on recently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, src, title, description, href, link }) => (
            <div
              key={id}
              className="bg-[#0d0d1a] border border-purple-900/40 rounded-xl overflow-hidden duration-200 hover:scale-105 hover:border-purple-500/60 shadow-lg shadow-purple-900/20"
            >
              <img src={src} alt={title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-5">{description}</p>

                <div className="flex items-center gap-3">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium duration-200">
                      <FaGithub size={16} /> GitHub
                    </button>
                  </a>

                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium duration-200">
                      <HiOutlineDesktopComputer size={16} /> Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
