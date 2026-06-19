import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";
import logo from "../assets/home-main.svg";
import About from "./About";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Competitive Programmer",
      "Software Developer",
      "MERN Stack Developer",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 80,
  });

  return (
    <div
      name="home"
      className="w-full flex flex-row justify-between items-center min-h-screen px-40"
    >
      {/* LEFT: Text column */}
      <div className="flex flex-col justify-center">
        {/* Greeting tag */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-0.5 rounded-full"
            style={{ background: "linear-gradient(90deg,#a855f7,#7c3aed)" }}
          />
          <span className="text-lg tracking-[3px] text-violet-400 uppercase font-medium">
            Portfolio
          </span>
        </div>

        {/* Name */}
        <p className="text-lg text-[#a5b2e5] tracking-wide mb-1">Hello, I'm</p>
        <h1
          className="text-6xl font-bold leading-tight tracking-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 30%, #c084fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hemjot Kaur
        </h1>

        <div
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full w-fit"
          style={{
            background: "rgba(139,92,246,0.12)",
            border: "1px solid rgba(139,92,246,0.3)",
          }}
        >
          <span className="w-4 h-4 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-violet-300 text-lg font-normal min-w-[210px]">
            {text}
          </span>
          <span className="inline-block w-0.5 h-4 bg-violet-500 rounded animate-pulse" />
        </div>
      </div>

      <div className="h-[400px] w-[450px] shrink-0">
        <img src={logo} alt="logo" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Home;
