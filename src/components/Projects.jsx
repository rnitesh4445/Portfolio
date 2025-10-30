import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    desc: "A modern learning website with interactive lessons and user dashboards.",
    img: "../../public/img/Screenshot 2025-10-30 223004.png",
    link: "https://e-learning-with-crud-4.onrender.com/",
  },
  {
    id: 2,
    title: "Swiggy Clone",
    desc: "A food delivery web app using Swiggy’s live API for restaurants and menus.",
    img: "../../public/img/Screenshot 2025-10-30 223423.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-800 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-indigo-400"
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition block"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
