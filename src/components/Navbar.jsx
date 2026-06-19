import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Skills",
      path: "/skills",
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      path: "/resume",
      name: "Resume",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed top-0 left-0 px-6 text-white bg-black/30 backdrop-blur-lg z-50">
      {/* Logo */}
      <div className="h-20  w-20 mt-6">
        <img src={logo} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, name, path }) => (
          <li
            key={id}
            className="px-6 text-lg font-medium text-gray-300 hover:text-violet-400 hover:scale-110 duration-200"
          >
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center md:hidden">
          {links.map(({ id, name, path }) => (
            <li
              key={id}
              className="py-6 text-4xl text-gray-300 hover:text-violet-400"
            >
              <Link to={path} onClick={() => setNav(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
