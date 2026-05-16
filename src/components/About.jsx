import profileImg2 from "../assets/profile2.png";
export default function About() {
  return (
    <section className="px-10 md:px-20 py-20"id="about">

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - IMAGE */}
       <div className="glass p-5 h-[600px] flex justify-center items-center">
  <img
    src={profileImg2}
    alt="about"
    className="rounded-xl w-full h-full object-cover object-top"
  />
</div>

        {/* RIGHT - TEXT */}
        <div>
          <p className="text-gray-300 mb-6">
            I'm Balaji Radhakrishnan, a passionate Full Stack Developer who loves building modern and scalable web applications.
          </p>

          <p className="text-gray-400 mb-6">
            I specialize in React, Node.js, MongoDB and creating beautiful UI designs.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="glass p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>

            <div className="glass p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>

            <div className="glass p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 text-sm">Dedication</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}