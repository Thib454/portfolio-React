"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string[];
  live?: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "Parent Exchange Platform",
    description:
      "Full stack development of a platform for sharing and exchanging equipment between families.",
    tech: ["Symfony", "React/Next.js", "MySQL", "PHPMyAdmin"],
    github: ["https://github.com/Thib454/PROJET-PERSO"],
    image: "/ParentsEnConfiance.jpg",
  },
  {
    title: "Personal Portfolio",
    description: "Showcase site for projects and skills.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    github: ["https://github.com/Thib454/portfolio"],
    image: "/portfolio.jpg",
    live: ["https://thib454.github.io/portfolio/",],
  },
  {
    title: "Carambar Project",
    description: "Mini web app displaying random jokes via a RESTful API.",
    tech: ["Node.js", "Express", "SQLite", "HTML/CSS/JS", "Render"],
    github: [
      "https://github.com/Thib454/backend-carambar-jokes",
      "https://github.com/Thib454/frontend-carambar-jokes",
    ],
    image: "/Carambar_project.jpg",
    live: [
      "https://backend-carambar-jokes.onrender.com/",
      "https://thib454.github.io/frontend-carambar-jokes/",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
          >
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {(project.github || []).map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    GitHub{" "}
                    {project.github && project.github.length > 1
                      ? `(${i + 1})`
                      : ""}
                  </a>
                ))}
                {(project.live || []).map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline font-medium"
                  >
                    Live Demo{" "}
                    {project.live && project.live.length > 1
                      ? `(${i + 1})`
                      : ""}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
