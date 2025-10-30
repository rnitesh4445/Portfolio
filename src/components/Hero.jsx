import React from "react";
import { motion } from "framer-motion";
import profile from "../../public/img/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left h-screen bg-white overflow-hidden pt-20"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-white"></div>

      {/* Floating blurred gradient animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-3xl"
      ></motion.div>

      {/* Left Content */}
      <div className="z-10 flex-1 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Nitesh Kumar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
        >
          A passionate{" "}
          <span className="text-cyan-600 font-medium">Web Developer</span>{" "}
          focused on crafting clean, user-friendly web experiences using{" "}
          <span className="font-medium">React, Express</span> &{" "}
          <span className="font-medium">Tailwind CSS</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="z-10 flex-1 flex justify-center items-center mb-12 md:mb-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[4px] shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src={profile}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Decorative Wave at Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#e0f7fa"
          fillOpacity="1"
          d="M0,288L80,272C160,256,320,224,480,202.7C640,181,800,171,960,186.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
