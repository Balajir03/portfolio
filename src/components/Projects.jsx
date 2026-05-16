import { useState } from "react";
import portfolioImg from "../assets/portfolioImg.png"

export default function Projects() {
  const [active, setActive] = useState("all");

  const projectsData = [
    {
      name: "Portfolio Website",
      category: "frontend",
      tech: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      ],
      img: portfolioImg, 
      live: "#",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      name: "E-commerce Backend",
      category: "backend",
      tech: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ],
      img: "https://via.placeholder.com/300x200",
      live: "",
      github: "https://github.com/yourusername/ecommerce-backend",
    },
    {
      name: "Fullstack App",
      category: "fullstack",
      tech: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
      img: "https://via.placeholder.com/300x200",
      live: "https://fullstack-app.netlify.app",
      github: "https://github.com/yourusername/fullstack-app",
    },
  ];

  const categories = ["all", "frontend", "backend", "fullstack"];

  const filteredProjects =
    active === "all"
      ? projectsData
      : projectsData.filter((proj) => proj.category === active);

  return (
    <section className="px-10 md:px-20 py-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        My Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-xl transition ${
              active === cat
                ? "bg-cyan-500"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            className="glass p-4  w-80 hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            <img
              src={proj.img}
              alt={proj.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <div className="flex gap-2 mb-4 flex-wrap">
              {proj.tech.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                  title={tech.name}
                />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-cyan-500 text-white rounded-lg text-sm hover:bg-cyan-600 transition"
                >
                  Live
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}