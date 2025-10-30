import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 z-50">
      <h1 className="text-2xl font-bold text-gray-700">Nitesh Kumar</h1>
      <ul className="hidden md:flex gap-8 text-lg">
        <li>
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
