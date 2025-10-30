import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-indigo-400"
      >
        About Me
      </motion.h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
        I'm a Web developer! React,Node,Express, Tailwind CSS, and
        JavaScript. I love building modern, responsive web applications that are
        both functional and visually appealing.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          "React",
          "Tailwind CSS",
          "JavaScript",
          "Node.js",
          "Git",
          "C++",
          "Database"
        ].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/20 transition"
          >
            <p className="text-xl font-semibold text-indigo-300">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
