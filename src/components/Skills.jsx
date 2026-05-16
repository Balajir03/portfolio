import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
    cloud: [
      {
        name: "AWS Cloud",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Netlify",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Netlify_logo.svg",
      },
     
    ],
  };

  return (
    <section className="px-10 md:px-20 py-20"id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        My Skills
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-5 py-2 rounded-xl transition ${
              active === category
                ? "bg-cyan-500"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SKILLS GRID */}
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData[active].map((skill, index) => (
          <div
            key={index}
            className={`glass p-6 w-40 text-center hover:scale-105 transition duration-300 ${
              skill.name
                ? "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                : "bg-transparent shadow-none pointer-events-none"
            }`}
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mx-auto mb-3 object-contain"
                onError={(e) => {
                  if (skill.name === "Netlify") {
                    e.currentTarget.src =
                      "https://simpleicons.org/icons/netlify.svg"; // fallback
                  }
                }}
              />
            )}
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}