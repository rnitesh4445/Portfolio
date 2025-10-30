import { motion } from "framer-motion";
import React from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gray-900 text-center md:text-left"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-indigo-400 text-center"
      >
        Contact Me
      </motion.h2>

      <p className="text-gray-300 mb-10 text-center">
        Interested in working together? Let’s connect!
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* LEFT SECTION — CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col justify-center space-y-6"
        >
          <div className="flex items-center gap-4">
            <Mail className="text-indigo-400" size={28} />
            <div>
              <h4 className="text-white font-semibold">Email</h4>
              <a
                href="mailto:rnitesh4445@gmail.com"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                rnitesh4445@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="text-indigo-400" size={28} />
            <div>
              <h4 className="text-white font-semibold">LinkedIn</h4>
              <a
                href="www.linkedin.com/in/nitesh-kumar-3a1907251

"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                linkedin.com/in/nitesh-kumar
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-indigo-400" size={28} />
            <div>
              <h4 className="text-white font-semibold">Location</h4>
              <p className="text-gray-300">India</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/meoplerb"
          method="POST"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded text-white w-full font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
