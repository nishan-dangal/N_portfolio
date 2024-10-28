'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

// interface Project {
//   id: number
//   title: string
//   description: string
//   image: string
//   category: string
//   githubLink: string
//   demoLink: string
// }

const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A responsive portfolio website built with React and Next.js",
    image: "/images/hello.png",
    category: "Web",
    githubLink: "https://github.com/yourusername/react-portfolio",
    demoLink: "https://react-portfolio-demo.vercel.app"
  },
  {
    id: 2,
    title: "Timestamp Microservice",
    description: "Build a simple API that converts a date string or timestamp into two formats: Unix timestamp and UTC date string.",
    image: "/images/timestamp.jpeg",
    category: "Backend Microprojects",
    githubLink: "https://github.com/nishan-dangal/Timestamp-Microservice",
    demoLink: "https://photography-portfolio-demo.netlify.app"
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A full-stack e-commerce solution with product management and secure checkout",
    image: "/images/ecommerce-app.jpg",
    category: "Web",
    githubLink: "https://github.com/yourusername/ecommerce-app",
    demoLink: "https://ecommerce-app-demo.herokuapp.com"
  },
  {
    id: 4,
    title: "Request Header Parser",
    description: " Build a simple API that reads information from incoming HTTP request headers and return IP Address, Language, Software/Browser Information in a JSON object notation",
    image: "/images/photography-portfolio.jpg",
    category: "Backend Microprojects",
    githubLink: "https://github.com/nishan-dangal/Request-header-parser",
    demoLink: "https://github.com/nishan-dangal/Request-header-parser"
  },
]

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-[#119ab586]"> 
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">My Projects</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {['All', 'Web', 'Backend Microprojects'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-white text-gray-900'
                  : 'bg-gray-800 text-white'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" objectFit="cover" quality={100}  width={30} height={30} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;