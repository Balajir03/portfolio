import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/profile.png";
import resume from "../assets/resume.pdf"; // ✅ IMPORT RESUME
import "../styles/global.css";

export default function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 mt-16 overflow-hidden"
    >
      {/* Floating light effects */}
      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-blob animation-delay-2000"></div>

      {/* LEFT */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Balaji Radhakrishnan
        </h1>

        {/* Changing Role */}
        <h2
          className={`text-lg md:text-2xl mb-4 text-cyan-400 font-medium transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
        >
          {roles[index]}
        </h2>

        <p className="text-gray-400 mb-6">
          I’m a passionate Full Stack Developer focused on building modern,
          scalable web applications with high performance, robust functionality,
          and excellent user experience.
        </p>

        {/* ✅ BUTTONS */}
        <div className="flex gap-4 flex-wrap">
          {/* Hire Me */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:scale-105 transition cursor-pointer text-white shadow-lg"
          >
            Hire Me
          </Link>

          {/* View Projects */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-lg hover:bg-white/10 cursor-pointer text-white shadow"
          >
            View Projects
          </Link>

          {/* 🔥 Download Resume */}
          <a
            href={resume}
            download="Balaji_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:scale-105 transition cursor-pointer text-white shadow-lg un "
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-10 mt-10 md:mt-0 glass p-6 shadow-2xl rounded-2xl">
        <img
          src={profileImg}
          alt="profile"
          className="w-72 md:w-80 rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}