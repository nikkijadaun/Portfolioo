import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  // Import hamburger and close icons

function Navbar() {
  const navItems = ["Home", "About", "Skills", "Resume", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track menu visibility

  // Toggle function for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <h1 className="text-lg font-bold">Portfolio</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={30} className="cursor-pointer" />  // Close icon when menu is open
          ) : (
            <FaBars size={30} className="cursor-pointer" />  // Hamburger icon
          )}
        </div>

        {/* Navigation Items */}
        <ul
          className={`flex space-x-8 ml-8 lg:flex ${isMenuOpen ? "flex-col absolute top-20 left-0 w-full bg-gray-800 px-6 py-4 lg:flex-row" : "hidden lg:flex"}`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`} // Links directly to the section id
                className="hover:text-blue-400 transition duration-300 py-2 px-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
