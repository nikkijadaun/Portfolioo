import React, { useState, useEffect, useMemo } from "react";
import picture from "../assets/images/picture.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const typingSpeed = 100;
  const pauseBetweenTexts = 1500;

  const rotatingTexts = useMemo(
    () => ["Web Development", "Backend Development", "Software Development"],
    []
  );

  useEffect(() => {
    let charIndex = 0;
    let textIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeText = () => {
      const fullText = rotatingTexts[textIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeText, pauseBetweenTexts);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % rotatingTexts.length;
        }
      }

      timeoutId = setTimeout(typeText, isDeleting ? typingSpeed / 2 : typingSpeed);
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [rotatingTexts, typingSpeed, pauseBetweenTexts]);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundColor: "black" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 sm:px-10">
        {/* Left Column - Text */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Hi, I'm Daulat Singh Jadaun
          </h1>
          <p className="text-md sm:text-lg md:text-xl mb-6 text-gray-200">
            <span className="text-gray-400">I am into </span>
            <span className="text-yellow-400 font-semibold">
              {currentText}
              <span className="blinking-cursor">|</span>
            </span>
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={picture}
            alt="Atul Kumar Singh"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-200 shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Wave Border */}
      <div className="absolute bottom-[-100px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#1e1e1e"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,186.7C672,203,768,213,864,197.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
