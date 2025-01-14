import React from "react";

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'TailwindCSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Git', icon: 'fab fa-git', color: 'text-red-500' },
    { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-500' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-yellow-600' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-green-600' },
    { name: 'Vercel', icon: 'vercel-logo', color: 'text-black' },
    { name: 'Express.js', icon: 'express-logo', color: 'text-gray-300' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-600' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-black' }
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 py-20 h-auto lg:h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center text-lg font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white hover:scale-105"
            >
              {/* Circle Icon */}
              <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-white ${skill.color} mb-4`}>
                {skill.icon === 'vercel-logo' ? (
                  // Vercel Logo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0l4 7h-8l4-7zm-6 9h12l-6 9-6-9z"
                    />
                  </svg>
                ) : skill.icon === 'express-logo' ? (
                  // Custom Express.js Logo (SVG)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 128 128"
                    className="w-12 h-12"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="60"
                      fontFamily="Arial, sans-serif"
                      fill="black"
                    >
                      Ex
                    </text>
                  </svg>
                ) : (
                  // FontAwesome Icons
                  <i className={`${skill.icon} text-4xl ${skill.color}`}></i>
                )}
              </div>
              {/* Skill Name */}
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
