import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Bala: ippadi submit aana data backend ku patha mail / db store pannanum
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-10 md:px-20 py-20" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="glass p-8 w-full max-w-lg rounded-xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
          />
          <button
            type="submit"
            className="px-6 py-2 mt-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}