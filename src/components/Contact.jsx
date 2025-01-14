import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold mb-8 text-white">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-16">
          I’d love to connect with you! Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex justify-center items-center gap-16">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atul-kumar-singh-6a49b7228/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-lg font-medium text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-blue-400 transition-all">
              <FaLinkedin size={40} className="text-blue-600" />
            </div>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/1AtulSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-lg font-medium text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-gray-400 transition-all">
              <FaGithub size={40} className="text-gray-800" />
            </div>
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:atuldev8132@gmail.com"
            className="group flex flex-col items-center gap-3 text-lg font-medium text-gray-300 hover:text-red-400 transition-transform transform hover:scale-110"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-red-400 transition-all">
              <FaEnvelope size={40} className="text-red-600" />
            </div>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
