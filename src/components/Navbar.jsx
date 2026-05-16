import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience"},
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-500">Bala.dev</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80} // 👈 navbar height adjust
              className="cursor-pointer text-white/90 hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-white/90 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}