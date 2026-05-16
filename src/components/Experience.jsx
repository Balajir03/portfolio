export default function Experience() {
    return (
        <section id="experience" className="px-10 md:px-20 py-20">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Experience & Certifications
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

                {/* Internship Card */}
                <div className="glass p-6 w-full md:w-96 hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                        Web Developer Intern
                    </h3>

                    <p className="text-gray-400 mb-2">
                        Tamilzorous private limited, salem.
                    </p>

                    <p className="text-sm text-gray-500 mb-3">
                        Duration: 1 Month
                    </p>

                    <p className="text-gray-300">
                        Developed responsive web projects using HTML, CSS, Bootstrap and JavaScript. Focused on building clean UI designs, improving layout responsiveness and enhancing user experience.
                    </p>
                </div>

                {/* MERN Course Card */}
                <div className="glass p-6 w-full md:w-96 hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">

                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                        MERN Stack Development
                    </h3>

                    <p className="text-gray-400 mb-2">
                        Pumo Technovation, Coimbatore / Self learning
                    </p>

                    <p className="text-sm text-gray-500 mb-3">
                        Duration: 8 months
                    </p>

                    <p className="text-gray-300">
                         Completed MERN Stack Development training through offline classroom sessions along with self-learning. Built real-time full stack projects and gained hands-on experience in MongoDB, Express.js, React and Node.js.
                    </p>

                </div>

            </div>

        </section>
    );
}