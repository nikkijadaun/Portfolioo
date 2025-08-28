import React from "react";
import image from "../assets/images/image.png";
const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-[#1e1e1e] text-gray-200 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-center">
        {/* Left Column - Picture */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src={image}
            alt="Atul Kumar Singh"
            className="w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] object-cover shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Right Column - About Content */}
        <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-white">
            About Me
          </h2>
          <p className="text-md sm:text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
            Hi, I'm <span className="text-yellow-400 font-semibold">Daulat Singh Jadaun</span>, a passionate Software Developer currently
            pursuing my B.Tech from NIT Arunachal Pradesh. With a strong foundation in Full-Stack Development and core subjects like Data
            Structures, Algorithms, and Computer Networks, I strive to create innovative solutions to complex problems.
          </p>
          <p className="text-md sm:text-lg md:text-xl leading-relaxed text-gray-300">
            I have a deep interest in <span className="text-yellow-400 font-semibold">Machine Learning</span> and <span className="text-yellow-400 font-semibold">AI</span>, and I'm constantly learning and exploring ways to leverage these technologies to create intelligent systems that have real-world impact. My ultimate goal is to combine my technical expertise with my passion for cutting-edge technologies to build software solutions that push the boundaries of what is possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
