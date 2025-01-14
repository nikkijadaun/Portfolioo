import React from "react";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-gradient-to-r bg-[#1e1e1e] text-gray-200 relative py-20 h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Resume</h2>
        <p className="text-lg mb-8 leading-relaxed">
          Discover my professional experience and expertise. Download my resume to learn more about my skills, projects, and accomplishments.
        </p>
        <a
          href="/Resume.pdf"
          download
          className="bg-gray-800 text-gray-200 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
