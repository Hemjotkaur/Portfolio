// components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-purple-900/30 bg-[#0a0a14]/80 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        {/* Left - credit */}
        <p className="order-1">
          Designed and Developed by{" "}
          <span className="text-white font-medium">Hemjot Kaur</span>
        </p>

        {/* Center - copyright */}
        <p className="order-3 sm:order-2">Copyright &copy; 2026</p>

        {/* Right - social icons */}
        <div className="order-2 sm:order-3 flex items-center gap-5 text-gray-300">
          <a
            href="https://github.com/Hemjotkaur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemjot-kaur-614735246/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/hem__kaur/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 duration-200"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
